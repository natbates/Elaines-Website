import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import "../styles/brands.css";
import Brand from '../components/brand';

const Brands = () => {
    const [brandImages, setBrandImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const imagesPerSlide = 3; // Number of images to display per slide

    useEffect(() => {
        const fetchBrandImages = async () => {
            const storage = getStorage();
            const brandImagesRef = ref(storage, 'brandImages/images');

            try {
                const result = await listAll(brandImagesRef);
                const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));
                const urls = await Promise.all(urlPromises);
                setBrandImages(urls);
            } catch (err) {
                console.error('Error fetching brand images:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandImages();
    }, []);

    // Auto-scroll functionality
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNext();
    //     }, 5000); // Automatically scroll every 5 seconds

    //     return () => clearInterval(interval); // Clean up interval on component unmount
    // }, [currentIndex, brandImages]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= Math.ceil(brandImages.length / imagesPerSlide) ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? Math.ceil(brandImages.length / imagesPerSlide) - 1 : prevIndex - 1
        );
    };

    return (
        <div id="brands">
            <img id = "car-img" src = "/images/processed/car.png"></img>
            <div className='brand-background'></div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : brandImages.length === 0 ? (
                <div>No brand images available</div>
            ) : (
                <div className="carousel-container">
                    <button className="carousel-button prev" onClick={handlePrev}>
                        &#8249; {/* Left arrow */}
                    </button>
                    <div className="carousel-slide-container">
                        <div
                            className="carousel-slide"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {brandImages.map((url, index) => (
                                <div key={index} className="carousel-card">
                                    <Brand img = {url}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-button next" onClick={handleNext}>
                        &#8250; {/* Right arrow */}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Brands;
