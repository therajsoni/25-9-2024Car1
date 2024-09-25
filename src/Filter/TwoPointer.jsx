import React, { useState, useContext } from 'react';
import Slider from 'react-slider';
import './Slider.css'; // Ensure this file is in place
import { BioContext } from '../context';

// Marks for the slider (showing values in Lakhs)
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
  { value: 1000000, label: '10L' },
];

const TwoPointerInput = ({ handlePriceChange, value, setValue }) => {
  const [values, setValues] = useState([0, 1000000]);
  const { filters, setFilters, login, setLogin, isOpen, setIsOpen } = useContext(BioContext);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
    handlePriceChange(newValues[0], newValues[1]);
    setValue([newValues[0], newValues[1]]);
  };

  return (
    <div className="slider-container">
      <div className="slider-labels">
        {marks.map((mark) => (
          <span key={mark.value} style={{ left: `${(mark.value / 1000000) * 100}%` }} className="slider-label">
            {mark.label}
          </span>
        ))}
      </div>

      <Slider
        min={0}
        max={1000000}
        step={100000} // Step size for each Lakh
        value={values}
        onChange={handleSliderChange}
        className="slider"
        renderTrack={(props, state) => <div {...props} className="track" />}
        renderThumb={(props, state) => <div {...props} className="thumb" />}
      />
    </div>
  );
};

export default TwoPointerInput;
