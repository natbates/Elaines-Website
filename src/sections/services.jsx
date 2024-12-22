import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; 
import Service from '../components/service';
import "../styles/services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            const db = getFirestore(); 
            try {
                const querySnapshot = await getDocs(collection(db, 'serviceDetails'));
                const entries = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setServices(entries);
            } catch (error) {
                console.error('Error fetching services:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const nextSlide = () =>
    {

    }

    const prevSlide = () =>
    {

    }

    return (
        <div id="services">
            <div id="services-text">
                <div className='top-line-service'>
                    <h1 className="main-text">What I can do for <span className="pink-underline">You</span></h1>

                    <div id="service-button-container">
                        <button className="service-button" onClick={prevSlide}>
                            <img src="svgs/triangle-left.svg" alt="Previous" />
                        </button>
                        <button className="service-button" onClick={nextSlide}>
                            <img src="svgs/triangle-right.svg" alt="Next" />
                        </button>
                    </div>
                </div>

                <p className="sub-text">I turn my hand to brochures, white papers, blogs, articles, script writing, internal comms, and beyond. However, here are my key strengths.</p>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <div id="service-container">
                    {services.map((entry) => (
                        <div className="service-item" key={entry.id}>
                            <Service
                                name={entry.title}
                                description={entry.description}
                                imageUrl={entry.imageUrl}
                            />
                        </div>
                    ))}
                </div>
            )}
            <div id = "service-bottom-curve"></div>
        </div>
    );
};

export default Services;
