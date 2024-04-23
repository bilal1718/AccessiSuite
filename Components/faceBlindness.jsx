import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import NavBar from './NavBar';
import 'react-toastify/dist/ReactToastify.css';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import '../Styles/App.css';

const FaceBlindness = () => {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(10);
  const [showTraining, setShowTraining] = useState(true);
  const [selectedImage, setSelectedImage] = useState(1);
  const [trainingImage, setTrainingImage] = useState(null);
  const [cycle, setCycle] = useState(1);
  const [gridClickable, setGridClickable] = useState(true);
  const gridImages = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
  ];

  useEffect(() => {
    const randomTrainingImage = gridImages[Math.floor(Math.random() * gridImages.length)];
    setTrainingImage(randomTrainingImage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        setShowTraining(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);


  const handleImageSelection = (imageId) => {
    if (imageId === selectedImage) {
      setScore(score + 1);
      toast.success("You Still Remember Him !", {
        position: "top-right",
      });
      setGridClickable(false);
    } else {
      toast.error("OOPS! Try Again.", {
        position: "top-center",
      });
    }

    setTimeout(() => {
      setGridClickable(true);
      setShowTraining(true);
    }, 5000);
  };

  const reset = () => {
    setCounter(10);
    setSelectedImage(1);
    if (cycle === 5) {
      setShowTraining(false);
      toast.info(`Game Over! Your score: ${score}/5`, {
        position: "top-center",
      });
    } else {
      setCycle(cycle + 1);
      setShowTraining(true);
      setGridClickable(true);
    }
  };

  return (
    <div className="App">
       <NavBar />
      <h1 className='text-4xl mb-4 mt-6 text-black font-bold'>Face Recognition Training</h1>
      {showTraining ? (
        <>
        <TrainingImage counter={counter} reset={reset} trainingImageUrl={trainingImage ? trainingImage.src : null} />
        <ResultBox score={score} cycle={cycle} />
        </>
      ) : (
        <>
          <ImageGrid handleImageSelection={handleImageSelection} setSelectedImage={setSelectedImage} selectedImage={selectedImage} gridClickable={gridClickable} />
          <ResultBox score={score} cycle={cycle} />
          <ToastContainer />
        </>
      )}
    </div>
  );
};

const TrainingImage = ({ reset, counter, trainingImageUrl }) => {
  return (
    <>
    <div className="training-container">
      <h3 className='text-black font-medium mt-8 mb-5 text-2xl'>Look at the image for <span className='font-bold text-2xl'>{counter}</span> seconds:</h3>
      <div className="image-wrapper">
        {trainingImageUrl && <img className='training-image' src={trainingImageUrl} alt="Training" />}
      </div>
      <button className="start-button" onClick={reset}>Reset Counter</button>
    </div>
    </>
  );
};

const ImageGrid = ({ handleImageSelection, selectedImage, setSelectedImage, gridClickable }) => {
  const gridImages = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
  ];

  const handleSelectImage = (imageId) => {
    if (gridClickable) {
      handleImageSelection(imageId);
      setSelectedImage(imageId);
    }
  };

  return (
    <>

    <div className="image-grid-container">
      <h3 className='text-black font-medium mt-8 mb-5 text-2xl'>Select the image you saw:</h3>
      <div className="image-grid">
        {gridImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            className={`grid-image ${selectedImage === image.id ? 'selected-correct' : ''}`}
            onClick={() => handleSelectImage(image.id)}
            style={{ pointerEvents: gridClickable ? 'auto' : 'none' }}
          />
        ))}
      </div>
    </div>
    </>
  );
};

const ResultBox = ({ score, cycle }) => {
  return (
    <div className="result-container">
      <div className="result-box">
        <h2 className="text-2xl font-bold">Score: {score}/5</h2>
        <h2 className="text-2xl font-bold">Cycle: {cycle}/5</h2>
      </div>
    </div>
    
  );
};

export default FaceBlindness;
