import React, { useState } from 'react';
import image1 from "../images/face.jpg";
import image2 from "../images/color.jpg";
import image3 from "../images/text.jpg";
import image4 from "../images/imageMag.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const images = [image1, image2, image3, image4];

  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="overflow-hidden w-3/4 md:w-1/2 lg:w-2/5">
        <div className="flex transition-transform duration-300 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <>
            <img key={index} src={image} alt={`Slide ${index + 1}`} className=" w-full h-auto" />
            </>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-20 flex items-center justify-center">
        <button onClick={prevSlide} className="bg-gray-800 text-white
         rounded-full w-20 h-20 text-2xl flex items-center justify-center">
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-10 flex items-center justify-center">
        <button onClick={nextSlide} className="bg-gray-800 text-white rounded-full w-20 h-20 text-2xl flex items-center justify-center">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
