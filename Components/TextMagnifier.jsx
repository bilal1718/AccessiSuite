import React, { useState } from 'react';
import "../Styles/TextMagnifier.css"
import NavBar from './NavBar';

const TextMagnifier = () => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifiedText, setMagnifiedText] = useState('');
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = (event) => {
        setShowMagnifier(true);
        setMagnifiedText(event.target.textContent);
        console.log(event.target)
    };

    const handleMouseOut = () => {
        setShowMagnifier(false);
        setMagnifiedText('');
    };

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };


    return (
        <div>
            <NavBar />
        <div className='flex text-center justify-center'>
              <div className='mb-8' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseMove={handleMouseMove} style={{ maxWidth: '600px', textAlign: 'center' }}>
                  <h2 className='text-4xl mt-4 font-bold mb-5'>Low Vision Problems</h2>
                  <p>Low vision refers to a visual impairment that cannot be</p>
                  <p>corrected fully with glasses, contact lenses, medication, or</p>
                  <p>surgery. It can result from a variety of factors, including</p>
                  <p>eye diseases, injury, or aging.</p>
                  <p>Individuals with low vision may experience difficulty with</p>
                  <p>daily activities such as reading,driving, recognizing faces,</p>
                  <p>or navigating their surroundings. This condition can</p>
                  <p>significantly impact their quality of life and independence.</p>
                  <p>available to assist individuals with low vision.These may</p>
                  <p>include magnifiers, screen readers, special lighting, and</p>
                  <p>adaptive technologies that enhance accessibility and</p>
                  <p>enable them to perform tasks more comfortably.</p>
                  <p>It's important to raise awareness about low vision and</p>
                  <p>advocate for inclusive environments that accommodate the</p>
                  <p>needs of individuals with visual impairments, promoting</p>
                  <p>equal access to information and opportunities for all.</p>
              </div>
          </div>
            {showMagnifier && (
                <div style={{
                    position: 'fixed',
                    top: position.y,
                    left: position.x,
                    fontSize: '32pt',
                    background: 'white',
                    border: '1px solid black',
                    padding: '10px',
                    borderRadius: '5px',
                }}>
                    {magnifiedText}
                </div>
            )}
        </div>
    );
};

export default TextMagnifier;
