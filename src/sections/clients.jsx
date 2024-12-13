import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Client from '../components/client';
import SeeStudies from '../components/seeCaseStudies';
import "../styles/clients.css";

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slideDirection, setSlideDirection] = useState(''); // Track slide direction
    const [clientHeight, setClientHeight] = useState(3); // Initial client count

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

    const CLIENT_INCREMENT = 3; // Define constant increment value
    const MIN_CLIENTS = 3; // Minimum number of clients to display
    const MAX_CLIENTS = clients.length; // Maximum number of clients available

    const handleShowMore = () => {
        // Increase the number of displayed clients
        setClientHeight((prevHeight) => {
            const remainingClients = clients.length - prevHeight;
            if (remainingClients > CLIENT_INCREMENT) {
                return prevHeight + CLIENT_INCREMENT; // Add the increment
            } else {
                return prevHeight + remainingClients; // Add only the remaining number of clients
            }
        });
    };

    const handleShowLess = () => {
        // Decrease the number of displayed clients, but don't go below the minimum
        setClientHeight(MIN_CLIENTS);
    };

    return (
        <>
            <div id="clients" style={{ height: clientHeight * 176 + 134 }}>
                <div id="clients-text">
                    <h1 className="main-text">What My <span className='yellow-underline'>Clients</span> Think Of Me</h1>
                </div>

                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error.message}</div>
                ) : (
                    <>
                        <div className={`client-reviews ${slideDirection}`}>
                            {clients.slice(0, clientHeight).map((entry, idx) => (
                                <div key={entry.id} className="client-container">
                                    <Client
                                        key={idx}
                                        name={entry.name}
                                        description={entry.description}
                                        imageUrl={entry.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div id = "client-bottom-container">
                
                <SeeStudies />

                <div id="control-buttons">
                    <button
                        className={`show-more-button flip ${clientHeight >= MAX_CLIENTS ? 'disabled' : ''}`}
                        onClick={handleShowMore}
                        disabled={clientHeight >= MAX_CLIENTS}
                    >
                        <img src="svgs/arrow.svg" alt="Show more" />
                    </button>
                    <button
                        className={`show-more-button ${clientHeight <= MIN_CLIENTS ? 'disabled' : ''}`}
                        onClick={handleShowLess}
                        disabled={clientHeight <= MIN_CLIENTS}
                    >
                        <img src="svgs/arrow.svg" alt="Show less" />
                    </button>
                </div>

                <div id="client-bottom-curve">
                </div>
            </div>
        </>
    );
};

export default Clients;
