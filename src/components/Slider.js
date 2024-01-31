import React, { useEffect, useState } from 'react';
import prev from './images/previous.png';
import next from './images/next.png';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }; 
    
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); 
    return () => clearInterval(interval);
  }, [currentIndex]); 
  return (
    <div style={{ position: 'relative', width: '100%', height: '700px' }}>
      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', zIndex: '1' }}>
        <img src={prev} alt="Previous" style={{ height: '50px', width: '50px', filter: 'invert()' }} />
      </button>
      <div className="container" style={{display:'flex',flexDirection:'row'}}>
        <h3></h3>
      <img src={images[currentIndex]} style={{ height: '700px', width: '100%', transition: '10s' }} alt="Slider Image" />
      </div>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', zIndex: '1' }}>
        <img src={next} alt="Next" style={{ height: '50px', width: '50px', filter: 'invert()' }} />
      </button>
    </div>
  );
};

export default Slider;
