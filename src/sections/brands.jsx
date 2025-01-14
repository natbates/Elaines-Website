import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import "../styles/brands.css";

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

    const generateRows = () => {
        if (brandImages.length === 0) return null;

        // Split the images into 5 rows
        const rows = [];
        const imagesPerRow = Math.ceil(brandImages.length / 5); // Divide images into 5 rows
        for (let i = 0; i < 5; i++) {
            rows.push(
                brandImages.slice(i * imagesPerRow, (i + 1) * imagesPerRow)
            );
        }

        return rows;
    };

    const rows = generateRows();

    return (
        <div id="brands">
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : brandImages.length === 0 ? (
                <div>No brand images available</div>
            ) : (
                <div className="brand-images-container">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`brand-row ${rowIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}
                        >
                            {/* Duplicate images for infinite scroll effect */}
                            {[...row, ...row].map((url, index) => (
                                <img
                                    key={`${rowIndex}-${index}`}
                                    src={url}
                                    alt={`Brand ${index + 1}`}
                                    className="brand-image"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Brands;
