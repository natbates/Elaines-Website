import React, { useState, useEffect, useContext } from "react";
import { signIn } from "../services/auth";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../contexts/authContext";
import { sendPasswordResetEmail } from "firebase/auth"; // Import the sendPasswordResetEmail function
import { auth } from "../services/firebaseConfig.js";

const LogIn = () => {

    // State to hold form values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusText, setStatusText] = useState("");
    const [resetEmail, setResetEmail] = useState(""); // State for reset email
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate(); 



    // Handle form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { user, status } = await signIn(currentUser, email, password);
            if (user) {
                console.log(status);
                navigate("/dashboard"); // Redirect to a private page
            } else {
                console.log(status);
            }
        } catch (error) {
            alert("Login failed, please try again.");
        }
    };

    // Handle password reset
    const handlePasswordReset = async () => {
        if (!resetEmail) {
            alert("Please enter your email address.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, resetEmail); // Send reset email
            alert("Password reset email sent! Check your inbox.");
            setResetEmail(""); // Clear the input field
        } catch (error) {
            alert("Error sending password reset email: " + error.message);
        }
    };

    return (
        <div id="login-page">
            <h1>Log In</h1>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
            <p className="forgot-password" onClick={() => {
                const emailInput = prompt("Please enter your email address to reset your password:");
                setResetEmail(emailInput);
                if (emailInput) handlePasswordReset();
            }}>
                Forgot Password?
            </p>
            <p>{statusText}</p>
        </div>
    );
};

export default LogIn;
