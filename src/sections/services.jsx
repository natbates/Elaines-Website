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
                    <h1 className="main-text">What I can do for <span className="pink-underline">you</span></h1>
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
            <p>Fintech Client: Led content and marketing initiatives that resulted in 14,000 monthly visits to blog posts, driving a 2963% increase in traffic compared to other marketing channels. Email campaigns directly generated over £35,000 in sales in a single quarter.</p>
            <p>SaaS Business: Crafted blog posts that ranked on the first page of Google, attracting 9,000+ visits per month and driving a 6% increase in monthly subscription revenue. My work also contributed to a £155K annual return through content and email strategies.</p>
            <p>Global E-commerce Client: Developed high-performing blogs and reports, contributing to 2 of their top 5 traffic sources and supporting sales efforts that generated an estimated £50,000 in new leads in just 6 months.</p>
            <p>B2B Brand: Created targeted email sequences and direct mail campaigns that booked 7 meetings in the first month, leading to £600,000 in business within the first quarter, with £37,000 in sales closed by year-end.</p>
        </div>
    );
};

export default Services;
