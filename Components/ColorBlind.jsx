import React, { useState } from 'react';
import ImageBackgroundDetector from "../Components/Detector";
import test from "../images/test.jpg"
import NavBar from './NavBar';

const ColorBlind = () => {
  const [filter, setFilter] = useState('hue-rotate(0deg) contrast(100%)');

  const GreenBlindChangeColor = () => {
    setFilter('hue-rotate(180deg)  contrast(120%) ');
  };
  const BlueBlindChangeColor = () => {
    setFilter('hue-rotate(25deg) contrast(150%)');
  };
  const RedBlindChangeColor = () => {
    setFilter('hue-rotate(210deg) contrast(150%)');
  };
  const resetColor = () => {
    setFilter('hue-rotate(0deg) contrast(100%)');
  };
  const imageUrl = test;

  return (
    <>
    <NavBar />
    <h1 className="text-4xl font-bold mt-4 text-center justify-center mb-7">Color Blindness Converter</h1>
    <p className="text-black text-center mb-10">This program modifies the colors of images according to different types of color blindness.<br/> Click the buttons below to see the effects!</p>
    <div className="flex flex-col items-center  min-h-screen">
      <div className="relative flex items-center">
        <div className="mr-4">
          <ImageBackgroundDetector imageUrl={imageUrl} />
        </div>
        <img
          src={imageUrl}
          alt="Lightning Flash"
          style={{ filter: filter, width: "44rem" }}
        />
        <div className="flex flex-col gap-10 ml-12 max-w-xs rounded-lg shadow-sm">
          <button onClick={GreenBlindChangeColor} className="bg-green-500 text-white px-4 py-2 rounded">Green Blind</button>
          <button onClick={BlueBlindChangeColor} className="bg-blue-500 text-white px-4 py-2 rounded">Blue Blind</button>
          <button onClick={RedBlindChangeColor} className="bg-red-500 text-white px-4 py-2 rounded">Red Blind</button>
          <button onClick={resetColor} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ColorBlind;
