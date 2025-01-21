// src/pages/DashBoard.jsx
import "../styles/dashboard.css";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { db } from "../services/firebaseConfig";
import Analytics from "../components/dashboard/analytics";

import AddPortfolioItem from "../components/dashboard/addBrandImage";
import RemovePortfolioItem from "../components/dashboard/removeBrandImage";
import EditAboutText from "../components/dashboard/editAboutText";
import AddClient from "../components/dashboard/addClient";
import RemoveClient from "../components/dashboard/removeClient";
import AddSample from "../components/dashboard/addSample";
import RemoveSample from "../components/dashboard/removeSample";
import AddService from "../components/dashboard/addService";
import RemoveService from "../components/dashboard/removeService";
import AddBrandImage from "../components/dashboard/addBrandImage";
import RemoveBrandImage from "../components/dashboard/removeBrandImage";

const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);
    
    const [brandImages, setBrandImages] = useState([]); // State for brand images
    const [clientItems, setClientItems] = useState([]);
    const [sampleItems, setSampleItems] = useState([]);
    const [serviceItems, setServiceItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchItems(); // Fetch all items on mount
        fetchBrandImages(); // Fetch brand images from Storage
    }, []);

    const fetchItems = async () => {
        setLoading(true);
        setError('');
        try {
            const [clientSnapshot, sampleSnapshot, serviceSnapshot] = await Promise.all([
                getDocs(collection(db, 'clientDetails')),
                getDocs(collection(db, 'sampleDetails')),
                getDocs(collection(db, 'serviceDetails')),
            ]);

            const clientData = clientSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            const sampleData = sampleSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            const serviceData = serviceSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setClientItems(clientData);
            setSampleItems(sampleData);
            setServiceItems(serviceData);

        } catch (err) {
            console.error('Error fetching items:', err);
            setError('Failed to fetch data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch Brand Images from Firebase Storage
    const fetchBrandImages = async () => {
        setLoading(true);
        setError('');
        const storage = getStorage();
        const brandImagesRef = ref(storage, 'brandImages/images'); // Reference to the folder in Storage
        try {
            const result = await listAll(brandImagesRef); // List all items in the folder
            const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));

            // Wait for all URLs to be fetched
            const urls = await Promise.all(urlPromises);
            setBrandImages(urls);
        } catch (error) {
            console.error('Error fetching brand images:', error);
            setError('Failed to fetch brand images. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const addClientItem = (newItem) => {
        setClientItems((prevItems) => [...prevItems, newItem]);
    };

    const addSampleItem = (newItem) => {
        setSampleItems((prevItems) => [...prevItems, newItem]);
    };

    const addServiceItem = (newItem) => {
        setServiceItems((prevItems) => [...prevItems, newItem]);
    };

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="dash-board">


            <div id = "about-me-page-background"></div>
            {/* Top Image Section */}
            <div
                id="about-top-img"
                style={{
                    backgroundImage: `url(images/elaine/backgrounds/image5.jpg)`,
                }}
            >
                <h1 className="main-text">Your Dashboard</h1>
            </div>

            <div id = "dashboard-container">

                <div id="analytics-container">
                    <Analytics />
                </div>

                <h2>Brand Items</h2>
                <div id="brand-container" className="container-row">
                    <div className="flex-row">
                        <AddBrandImage onAdd={fetchBrandImages} />
                        <RemoveBrandImage 
                            brandImages={brandImages}
                            onFetch={fetchBrandImages} 
                        />
                    </div>
                </div>

                <h2>Clients</h2>
                <div id="client-container" className="container-row">
                    <div className="flex-row">
                        <AddClient onAdd={addClientItem} />
                        {loading ? (
                            <p>Loading client items...</p>
                        ) : error ? (
                            <p style={{ color: 'red' }}>{error}</p>
                        ) : (
                            <RemoveClient 
                                clientItems={clientItems} 
                                onFetch={fetchItems}
                            />
                        )}
                    </div>
                </div>

                <h2>Samples</h2>
                <div id="sample-container" className="container-row">
                    <div className="flex-row">
                        <AddSample onAdd={addSampleItem} />
                        {loading ? (
                            <p>Loading sample items...</p>
                        ) : error ? (
                            <p style={{ color: 'red' }}>{error}</p>
                        ) : (
                            <RemoveSample 
                                sampleItems={sampleItems} 
                                onFetch={fetchItems}
                            />
                        )}
                    </div>
                </div>

                <h2>Services</h2>
                <div id="service-container" className="container-row">
                    <div className="flex-row">
                        <AddService onAdd={addServiceItem} />
                        {loading ? (
                            <p>Loading service items...</p>
                        ) : error ? (
                            <p style={{ color: 'red' }}>{error}</p>
                        ) : (
                            <RemoveService 
                                serviceItems={serviceItems} 
                                onFetch={fetchItems}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
