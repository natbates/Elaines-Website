import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import '../styles/brands.css';

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

    // Divide the images into 3 groups for the rows
    const row1Images = brandImages.filter((_, index) => index % 3 === 0);
    const row2Images = brandImages.filter((_, index) => index % 3 === 1);
    const row3Images = brandImages.filter((_, index) => index % 3 === 2);

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
                            {[...row1Images, ...row2Images, ...row3Images].map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Brand ${index + 1}`}
                                    className="brand-image"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="brand-row">
                        <div className="brand-image-container scroll-reverse">
                            {[...row2Images, ...row3Images, ...row1Images].map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Brand ${index + 1}`}
                                    className="brand-image"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="brand-row">
                        <div className="brand-image-container scroll-forward">
                            {[...row3Images, ...row1Images, ...row2Images].map((url, index) => (
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