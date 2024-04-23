import React from "react";
import ReactImageMagnify from "react-image-magnify";
import NavBar from "./NavBar";
const MyReactImageMagnify = (props) => {
  return (
    <>
    <NavBar />
  <div className="flex mt-20 ml-20">

      <ReactImageMagnify
        {...props}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
          },
          largeImage: {
            src: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
            width: 1000,
            height: 480,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
    </>
  );
};

export default MyReactImageMagnify;
