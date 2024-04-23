import React from "react";
import FaceBlindness from "./Components/faceBlindness";
import "./Styles/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextMagnifier from "./Components/TextMagnifier";
import ColorBlind from "./Components/ColorBlind";
import MyReactImageMagnify from "./Components/ImageMagnify";
import Home from "./Home";


function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="face-blindness" element={<FaceBlindness />} />
          <Route path="color-blindness" element={<ColorBlind />} />
          <Route path="text-magnifier" element={<TextMagnifier />} />
          <Route path="image-magnifier" element={<MyReactImageMagnify />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;