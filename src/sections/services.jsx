import React, { useEffect, useState, useRef } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; 
import Service from '../components/service';
import "../styles/services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [active, setActive] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // Items visible in the viewport
    const sliderRef = useRef(null);
    const itemRef = useRef(null);

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

    useEffect(() => {
        // Get item width and update visible count based on the viewport size
        if (itemRef.current) {
            const itemWidthWithGap = itemRef.current.getBoundingClientRect().width + 10; // Adjust for gap
            setItemWidth(itemWidthWithGap);

            const containerWidth = sliderRef.current.parentElement.getBoundingClientRect().width;
            setVisibleCount(Math.floor(containerWidth / itemWidthWithGap));
        }
    }, [services]); // Run after services are loaded

    const nextSlide = () => {
        setActive((prev) => Math.min(prev + 1, services.length - visibleCount - 1));
    };

    const prevSlide = () => {
        setActive((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${active * itemWidth}px)`;
        }
    }, [active, itemWidth]);

    return (
        <div id="services">
            <div id="services-text">
                <div id="service-top">
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
                    <div className="list" ref={sliderRef}>
                        {services.map((entry) => (
                            <div className="item" key={entry.id} ref={itemRef}>
                                <Service
                                    name={entry.title}
                                    description={entry.description}
                                    imageUrl={entry.imageUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div id="service-curve"/>
        </div>
    );
};

export default Services;
