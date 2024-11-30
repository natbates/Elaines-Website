import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

import "../styles/brand.css";

const Brands = () => {
    const [brandImages, setBrandImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrandImages = async () => {
            const storage = getStorage();
            const brandImagesRef = ref(storage, 'brandImages/images');

            try {
                const result = await listAll(brandImagesRef);
                const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));
                const urls = await Promise.all(urlPromises);
                setBrandImages(urls);
            } catch (error) {
                console.error('Error fetching brand images:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandImages();
    }, []);



    return (
        <div id="brands">
            <h1 className="main-text">Brands</h1>
            <p className="sub-text">Here are the brands I have worked for.</p>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <div className="brand-images-rows">
                    <div className="brand-row">
                        <div className="brand-image-container scroll-forward">
                            {brandImages.map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Brand ${index + 1}`}
                                    className="brand-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Brands;