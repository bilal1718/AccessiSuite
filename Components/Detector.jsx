import React, { useRef, useEffect, useState } from 'react';

const ImageBackgroundDetector = ({ imageUrl }) => {
  const canvasRef = useRef(null);
  const [detectedBackgroundColor, setDetectedBackgroundColor] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = imageUrl;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      const pixelData = ctx.getImageData(0, 0, 1, 1).data;
      const [red, green, blue] = pixelData;
      const hexCode = rgbToHex(red, green, blue);
      setDetectedBackgroundColor(hexCode);
    };
  }, [imageUrl]);

  const rgbToHex = (r, g, b) =>
    `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4"
      style={{
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div>
        <h1 className="text-2xl font-semibold mb-2">Original Dominant Background Color:</h1>
        <div
          className="w-23 h-20 rounded-full border
           border-gray-300 flex items-center justify-center text-lg"
          style={{ backgroundColor: detectedBackgroundColor }}
        >
          <p className="text-lg text-white">{detectedBackgroundColor}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageBackgroundDetector;
