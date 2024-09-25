// import React, { useEffect, useState, useContext } from "react";
// import Slider from "react-slider";
// import "./Slider.css"; // Make sure you have this CSS file
// import { BioContext } from "../context";

// const TwoPointerInput = ({ handlePriceChange, value, setValue }) => {
//   const [values, setValues] = useState([0, 1000000]);

//   const { filters, setFilters, login, setLogin, isOpen, setIsOpen } =
//     useContext(BioContext);

//   const handleSliderChange = (newValues) => {
//     setValues(newValues);
//     handlePriceChange(newValues[0], newValues[1]); // Use handlePriceChange instead of onPriceChange
//     setValue([newValues[0], newValues[1]]);
//   };

//   return (
//     <div className="flex flex-row justify-between items-center w-full">
    //   <Slider
    //     min={0}
    //     max={1000000}
    //     value={values}
    //     onChange={handleSliderChange}
    //     className="slider" // Slider will occupy remaining space
    //     renderTrack={(props, state) => <div {...props} className="track" />}
    //     renderThumb={(props, state) => <div {...props} className="thumb" />}
    //   />
    // </div>
//   );
// }; export default TwoPointerInput


import React, { useEffect, useState, useContext } from 'react';
import Slider from 'react-slider';
import './Slider.css'; // Ensure you have proper CSS for the slider.
import { BioContext } from '../context';

const CombinedSlider = ({ handlePriceChange, value, setValue }) => {
  const [values, setValues] = useState([0, 1000000]);
  const { filters, setFilters, login, setLogin, isOpen, setIsOpen } = useContext(BioContext);
  const { filters, setFilters, login, setLogin, isOpen, setIsOpen } = useContext(BioContext);

  // Marks for the slider from 0 to 10 Lakhs
  const marks = [
    { value: 0, label: '0' },
    { value: 100000, label: '1L' },
    { value: 200000, label: '2L' },
    { value: 300000, label: '3L' },
    { value: 400000, label: '4L' },
    { value: 500000, label: '5L' },
    { value: 600000, label: '6L' },
    { value: 700000, label: '7L' },
    { value: 800000, label: '8L' },
    { value: 900000, label: '9L' },
    { value: 1000000, label: '10L' }
  ];

  // Handle slider change for the selected range
  const handleSliderChange = (newValues) => {
    setValues(newValues);
    handlePriceChange(newValues[0], newValues[1]); // Update the parent component with new values
    setValue([newValues[0], newValues[1]]);
  };

  return (
    <div className="flex flex-row w-full">
      {/* Slider with marks, value display, and range */}

      <Slider
        min={0}
        max={1000000}
        step={100000} // Step of 1 Lakh
        value={values}
        onChange={handleSliderChange}
        className="slider"
        renderTrack={(props, state) => <div {...props} className="track" />}
        renderThumb={(props, state) => (
          <div {...props} className="thumb">
           
          </div>
        )}
        marks={marks} // Display marks for points from 0L to 10L
      />
  
    </div>
  );
};

export default CombinedSlider;




