import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Client from '../components/client';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(''); // Track slide direction

    useEffect(() => {
        const fetchClients = async () => {
            const db = getFirestore();
            try {
                const querySnapshot = await getDocs(collection(db, 'clientDetails'));
                const entries = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setClients(entries);
            } catch (error) {
                console.error('Error fetching client entries:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);



    return (
        <div id="clients">
            <h1 className="main-text">Clients</h1>
            <p className="sub-text">
                I loved writing for B2B the instant I joined my first SaaS business. Yes really! 
                Because the products and services I work to tell the story of do improve working lives and days, 
                I feel good about what I do. When I know people are getting value for their money and making a wise decision - 
                that shines through my content. My clients are spread as far apart as Singapore, Amsterdam and across the UK.
            </p>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <div className={`client-reviews ${slideDirection}`}>
                    {clients.map((entry, idx) => (
                        <div
                            key={entry.id}
                            className={`client-container ${idx === 2 ? 'center' : `side-${Math.abs(2 - idx)}`}`}
                        >
                            <Client
                                name={entry.name}
                                description={entry.description}
                                imageUrl={entry.image}
                                isCenter={idx === 2}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clients;
