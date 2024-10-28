import { useEffect, useState } from 'react'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { db, storage } from '../firebaseConfig'; 
import { ref, getDownloadURL, listAll } from 'firebase/storage'; 
import "../styles/about.css";

const About = () => {
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState('');
    const [aboutImage, setAboutImage] = useState(''); 

    useEffect(() => {
        const fetchAboutText = async () => {
            const dbCollection = collection(db, 'about');
            try {
                const querySnapshot = await getDocs(dbCollection);
                if (!querySnapshot.empty) {
                    const items = querySnapshot.docs.map(doc => doc.data());
                    const text = items[0].text; 
                    setAboutText(text); 
                } else {
                    setError('No about text found.'); 
                }
            } catch (err) {
                console.error('Error fetching about text:', err);
                setError('Failed to fetch about text. Please try again later.'); 
            } finally {
                setLoading(false); 
            }
        };

        const fetchAboutImage = async () => {
            try {
                const folderRef = ref(storage, 'about-image'); // Reference to the 'about-image' folder
                const listResponse = await listAll(folderRef); // List all files inside the folder
                
                if (listResponse.items.length > 0) {
                    const firstFileRef = listResponse.items[0]; // Get the first file
                    const imageUrl = await getDownloadURL(firstFileRef); // Get its download URL
                    setAboutImage(imageUrl); // Set the image URL state
                } else {
                    setError('No images found in about-image folder.'); // Handle case with no images
                }
            } catch (err) {
                console.error('Error fetching about image:', err);
                setError('Failed to fetch about image. Please try again later.'); // Handle errors
            }
        };

        fetchAboutImage(); 
        fetchAboutText(); 
    }, []); 

    return (
        <div id="about">
            <h1 className="main-text">About</h1>
            {loading ? ( 
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div id = "about-container">
                    <p className="sub-text about-text">{aboutText}</p>
                    {aboutImage && (
                        <div id="about-container-extra">
                            <img src={aboutImage} alt="About" /> 
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default About;
