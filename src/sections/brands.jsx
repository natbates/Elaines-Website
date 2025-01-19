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
                const urlPromises = result.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    const fileName = itemRef.name.replace(/\.[^/.]+$/, ""); // Remove file extension
                    
                    // Capitalize the start of each word in the file name
                    const capitalizedFileName = fileName
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                    
                    return { url, fileName: capitalizedFileName };
                });
                const brandData = await Promise.all(urlPromises);
                setBrandImages(brandData);
            } catch (err) {
                console.error('Error fetching brand images:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandImages();
    }, []);

    return (
        <div id="brands">
            <div className="brand-background"></div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : brandImages.length === 0 ? (
                <div>No brand images available</div>
            ) : (
                <div className="brand-container">
                    {brandImages.map((brand, index) => (
                        <div key={index} className="brand">
                            <img className="brand-image" src={brand.url} alt={brand.fileName} />
                            <div>
                                <p>{brand.fileName}</p>
                                <div className="star-container">
                                    <img src="./images/processed/black-star.png" alt="star" />
                                    <img src="./images/processed/black-star.png" alt="star" />
                                    <img src="./images/processed/black-star.png" alt="star" />
                                    <img src="./images/processed/black-star.png" alt="star" />
                                    <img src="./images/processed/black-star.png" alt="star" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Brands;
