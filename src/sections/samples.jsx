// src/pages/Portfolio.jsx
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import Sample from '../components/sample';
import '../styles/samples.css'; // Import your CSS file for styling

const Samples = () => {
    const [samples, setSamples] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSamples = async () => {
            const db = getFirestore(); // Initialize Firestore
            try {
                const querySnapshot = await getDocs(collection(db, 'sampleDetails'));
                const entries = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSamples(entries);
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
        <div id="samples">
            <h1 className="main-text">Samples</h1>
            <p className="sub-text">In a vast career, I have worked with hundreds of brands. This represents a very small highlight reel of what I can do!</p>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <div className="samples">
                    {samples.map((entry) => (
                        <Sample
                            key={entry.id}
                            name={entry.title}
                            description={entry.description}
                            imageUrl={entry.imageUrl}
                            websiteUrl = {entry.websiteUrl}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Samples;
