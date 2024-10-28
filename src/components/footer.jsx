import "../styles/footer.css";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig"
import { useLocation } from 'react-router-dom';
import { doc, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions
import { collection } from 'firebase/firestore';
import { useState, useEffect } from "react";

const Footer = () =>
{
    const [userDetails, setUserDetails] = useState({
        email: '',
        linkedIn: '',
        phone: ''
    });
    const [loading, setLoading] = useState(true);
                            {location.pathname !== '/login' && <Footer />}

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                // Get all user documents from the userDetails collection
                const userDetailsCollectionRef = collection(db, 'userDetails');
                const userSnapshot = await getDocs(userDetailsCollectionRef);
                console.log("fetching contact info");
                console.log(userSnapshot);
                // Check if any documents exist
                if (!userSnapshot.empty) {
                    // Get the first document from the snapshot
                    const firstUserDoc = userSnapshot.docs[0]; // This gets the first document
                    setUserDetails(firstUserDoc.data());
                } else {
                    console.log("No user details found for this user.");
                }
            } catch (error) {
                console.error("Error fetching user details: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUserDetails();
    }, []);

    if (location.pathname == '/login'){return null}

    return (
        <div id = "footer">
            <Link to="/login" className="no-underline">
                <p>Elaine Keep - Log in</p>
            </Link>
            {loading ? (
                <p>Loading user details...</p>
            ) : (
                <div id="further-info">
                    <div className="contact-details">
                        <div className="detail">
                            <label>Email:</label>
                            <a href={`mailto:${userDetails.email}`}>{userDetails.email}</a>
                        </div>
                        <div className="detail">
                            <label>LinkedIn:</label>
                            <a href={userDetails.linkedIn} target="_blank" rel="noopener noreferrer">{userDetails.linkedIn}</a>
                        </div>
                        <div className="detail">
                            <label>Phone:</label>
                            <a href={`tel:${userDetails.phone}`}>{userDetails.phone}</a>
                        </div>
                    </div>
                </div>
            )}
            <p>
            20 - 22 Wenlock Road, London N17GU
            (Registered business since 2016. Business address only, no correspondance)

            hello@elainekeep.com
            </p>
        </div>
    )
}

export default Footer;