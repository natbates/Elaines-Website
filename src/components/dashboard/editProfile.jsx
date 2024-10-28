import React, { useState, useEffect, useContext } from 'react';
import { getDoc, doc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Ensure your Firebase config is set up correctly
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import necessary functions for storage
import "../../styles/editAboutText.css";
import { AuthContext } from '../../contexts/authContext';
import "../../styles/profile.css"

const EditProfile = () => {
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [profileDetails, setProfileDetails] = useState({
        email: '',
        linkedIn: '',
        phone: '',
    });
    const [originalProfileDetails, setOriginalProfileDetails] = useState({}); // State for original profile details
    const [file, setFile] = useState(null); // State for selected file
    const [profilePicture, setProfilePicture] = useState(currentUser?.photoURL || null); // State for profile picture
    const [previewPicture, setPreviewPicture] = useState(null); // State for preview image

    // Fetch the profile details when the component mounts
    useEffect(() => {
        if (currentUser) {
            fetchProfileDetails();
        }
    }, [currentUser]);

    // Fetch profile details from Firestore
    const fetchProfileDetails = async () => {
        try {
            const userDocRef = doc(db, 'userDetails', currentUser.uid); // Access user details using UID
            const userSnapshot = await getDoc(userDocRef);
            if (userSnapshot.exists()) {
                const data = userSnapshot.data();
                // If the document exists, set the profile details and original profile details
                setProfileDetails(data);
                setOriginalProfileDetails(data); // Store original details for revert
                setProfilePicture(data.profilePicture || null); // Set the profile picture from fetched data
            } else {
                // If the document does not exist, create it with default values
                const defaultValues = {
                    email: '',  
                    linkedIn: '', 
                    phone: '', 
                    profilePicture: null, // Default value for profile picture
                };
                await setDoc(userDocRef, defaultValues); // Create the document with default values
                setProfileDetails(defaultValues); // Update the state with default values
                setOriginalProfileDetails(defaultValues); // Store original details for revert
                console.log("New document created with default values.");
            }
        } catch (error) {
            console.error("Error fetching profile details: ", error);
        } finally {
            setLoading(false);
        }
    };

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Handle file input change for profile picture
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile); // Set the selected file to state

            // Create a URL for the preview
            const fileURL = URL.createObjectURL(selectedFile);
            setPreviewPicture(fileURL); // Set the preview image
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userDocRef = doc(db, 'userDetails', currentUser.uid); // Reference to user details document
            await updateDoc(userDocRef, profileDetails); // Update the user details in Firestore

            // Upload new profile picture if a file is selected
            if (file) {
                const storage = getStorage();
                const storageRef = ref(storage, `profilePictures/${currentUser.uid}`); // Define path for the image
                await uploadBytes(storageRef, file); // Upload the file
                console.log("Uploading new profile picture");
                const downloadURL = await getDownloadURL(storageRef); // Get the download URL
                await updateDoc(userDocRef, { profilePicture: downloadURL }); // Update Firestore with new profile picture URL
                setProfilePicture(downloadURL); // Update state with new profile picture
            }
            alert('Profile updated successfully!');
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
    };

    // Reset preview picture and profile details on cancel or form reset
    const handleCancel = () => {
        setPreviewPicture(null); // Reset preview
        setFile(null); // Reset file
        setProfileDetails(originalProfileDetails); // Revert to original profile details
    };

    return (
        <div className="edit-about-text">
            {loading ? (
                <p>Loading profile details...</p>
            ) : (
                <div className="profile-container">
                    <div id="profile-details">
                        <div className="profile-picture-container">
                            <img
                                src={previewPicture || profilePicture || "default-avatar.png"} // Use preview if available, else current picture or default
                                alt="Profile"
                                onClick={() => document.getElementById('file-input').click()} // Click to change picture
                                style={{ cursor: 'pointer', width: '100px', height: '100px', borderRadius: '50%' }} // Styling
                            />
                            <input
                                type="file"
                                id="file-input"
                                accept="image/*"
                                style={{ display: 'none' }} // Hide the file input
                                onChange={handleFileChange}
                            />
                        </div>
                        <h2>User Profile</h2>
                        <p><strong>User ID:</strong> {currentUser.uid}</p>
                        <p><strong>Email:</strong> {currentUser.email}</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Contact Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={profileDetails.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>LinkedIn:</label>
                            <input
                                type="text"
                                name="linkedIn"
                                value={profileDetails.linkedIn}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={profileDetails.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="submit-button">Update Profile</button>
                        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button> {/* Cancel button */}
                    </form>
                </div>
            )}
        </div>
    );
};

export default EditProfile;
