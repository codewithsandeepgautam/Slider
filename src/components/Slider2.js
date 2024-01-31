import React, { useState, useEffect} from "react";
import prev from "./images/previous.png";
import next from "./images/next.png";

const Slider2 = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); 
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <section className="banner relative bg-[#000244] md:py-[50px] py-[30px]">
      <div className="container relative z-10" style={{ overflow: 'hidden' }}>
        <div className="slider-container" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((item, i) => (
            <div key={i} className={`slider-item ${i === currentIndex ? 'active' : ''}`} style={{ flex: '0 0 100%', maxWidth: '100%', transition: 'transform 0.5s ease' }}>
              <div className="content-wrapper flex 2xl:px-0 lg:px-[50px] md:px-[40px] px-0 flex-col md:flex-row w-full justify-between items-center">
                <div className="w-full md:w-[50%]">
                  <div className="md:max-w-[500px] max-w-full w-full">
                    <div className="text-[30px] md:text-[38px] lg:text-[50px] text-[#fff] font-bold leading-[114.167%] mb-[20px]" style={{paddingLeft:'80px'}}>
                      {item.title}
                    </div>
                    <p className="text-[14px] lg:text-[16px] leading-[162.5%] text-white" style={{paddingLeft:'80px'}}>{item.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-[40%] flex justify-center lg:justify-end md:mt-0 mt-[20px] lg:max-h-[500px] sm:max-h-[400px] max-h-[280px]" style={{marginRight:'80px'}}>
                  <img src={item.featuredImage} alt={item.altText} width="500" height="500" className="object-center object-contain" loading="eager" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="slider-control prev" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', zIndex: '1' }}>
          <img src={prev} alt="Previous" style={{ height: '50px', width: '50px', filter: 'invert(1)' }} />
        </button>
        <button onClick={nextSlide} className="slider-control next" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', zIndex: '1' }}>
          <img src={next} alt="Next" style={{ height: '50px', width: '50px', filter: 'invert(1)' }} />
        </button>
      </div>
    </section>
  );
};

export default Slider2;
