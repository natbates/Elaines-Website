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

    // Dynamic styles for responsive grids
    const generateGridStyle = (imageCount) => {
        if (!imageCount) return {};
        const rows = Math.ceil(Math.sqrt(imageCount)); // Calculate rows based on square root
        const cols = rows; // Make the grid square
        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, auto)`,
            gap: '20px', // Adjust space between items
        };
    };

    return (
        <div id="brands">
            <h1 className="main-text">Brands</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : brandImages.length === 0 ? (
                <div>No brand images available</div>
            ) : (
                <div className="brand-images" style={generateGridStyle(brandImages.length)}>
                    {brandImages.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Brand ${index + 1}`}
                            className="brand-image"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Brands;
