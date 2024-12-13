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

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(refreshInterval);
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1 <= lengthItems ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : lengthItems));
  };

  const selectDot = (index) => {
    setActive(index);
  };

  useEffect(() => {
    if (sliderRef.current && samples.length) {
      const sliderWidth = sliderRef.current.offsetWidth;
      sliderRef.current.style.left = `-${active * sliderWidth/samples.length}px`;
    }
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
              <>
                  <div className="item" key={sample.id}>
                      <Sample
                      name={sample.title}
                      description={sample.description}
                      imageUrl={sample.imageUrl}
                      websiteUrl={sample.websiteUrl}
                      nextSlide={nextSlide}
                      prevSlide={prevSlide}
                      />
                  </div>
              </>
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
