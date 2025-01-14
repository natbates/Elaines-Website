import React, { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Sample from '../components/sample';
import '../styles/samples.css';

const Samples = () => {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const lengthItems = samples.length - 1;
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    const fetchSamples = async () => {
      const db = getFirestore(); // Initialize Firestore
      try {
        const querySnapshot = await getDocs(collection(db, 'sampleDetails'));
        const entries = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSamples(entries);
      } catch (error) {
        console.error('Error fetching samples:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSamples();
  }, []);

  const nextSlide = () => {
    setShowReadMore(false);
    setActive((prev) => (prev + 1 <= lengthItems ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setShowReadMore(false);
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : lengthItems));
  };

  const selectDot = (index) => {
    setActive(index);
  };

  const updateSliderPosition = () => {
    if (sliderRef.current && samples.length) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const slideWidth = sliderWidth / samples.length; // Width of each slide
      sliderRef.current.style.left = `-${active * slideWidth}px`;
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [active, samples]);

  useEffect(() => {
    const handleResize = () => {
      updateSliderPosition(); // Recalculate slider position on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active, samples]);

  return (
    <>
      <div id="samples">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <div className="slider">
            <div className="list" ref={sliderRef}>
              {samples.map((sample, index) => (
                <div className="item" key={sample.id}>
                  <Sample
                    name={sample.title}
                    description={sample.description}
                    imageUrl={sample.imageUrl}
                    websiteUrl={sample.websiteUrl}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                    showMore={showReadMore}
                    setShowReadMore={setShowReadMore}
                  />
                </div>
              ))}
            </div>
            <ul className="dots">
              {samples.map((_, index) => (
                <li
                  key={index}
                  className={active === index ? 'active' : ''}
                  onClick={() => selectDot(index)}
                ></li>
              ))}
            </ul>
          </div>
        )}
        <div id="client-top-curve"></div>
      </div>
    </>
  );
};

export default Samples;
