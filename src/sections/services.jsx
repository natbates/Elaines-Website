// src/pages/Portfolio.jsx
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import Service from '../components/service';
import '../styles/services.css'; // Import your CSS file for styling

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSamples = async () => {
            const db = getFirestore(); // Initialize Firestore
            try {
                const querySnapshot = await getDocs(collection(db, 'serviceDetails'));
                const entries = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setServices(entries);
            } catch (error) {
                console.error('Error fetching samples:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSamples();
    }, []);

    return (
        <div id="services">
            <h1 className="main-text">Services</h1>
            <p className="sub-text">I turn my hand to brochures, white papers, blogs, articles, script writing, internal comms and beyond. However, here are my key strengths.</p>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <div className="service-container">
                    {services.map((entry) => (
                        <Service
                            key={entry.id}
                            name={entry.title}
                            description={entry.description}
                            imageUrl={entry.imageUrl}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
