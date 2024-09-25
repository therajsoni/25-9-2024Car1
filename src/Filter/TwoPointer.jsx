import React, { useEffect, useState,useContext } from 'react';
import Slider from 'react-slider';
import './Slider.css'; // Make sure you have this CSS file
import { BioContext } from '../context';



const TwoPointerInput = ({ handlePriceChange ,value,setValue}) => {
  const [values, setValues] = useState([0, 1000000]);

  const { filters, setFilters , login , setLogin , isOpen, setIsOpen } = useContext(BioContext);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
    handlePriceChange(newValues[0], newValues[1]); // Use handlePriceChange instead of onPriceChange
    setValue([newValues[0],newValues[1]]) 
};


  return (
    <div className="flex flex-row justify-between items-center w-full">
    <span className="amount">${values[0]}</span>
    <Slider
      min={0}
      max={1000000}
      value={values}
      onChange={handleSliderChange}
      className="slider" // Slider will occupy remaining space
      renderTrack={(props, state) => <div {...props} className="track" />}
      renderThumb={(props, state) => <div {...props} className="thumb" />}
    />
    <span className="amount">${values[1]}</span>
  </div>
  );
};

export default TwoPointerInput;
