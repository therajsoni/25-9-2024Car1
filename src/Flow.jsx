import React, { useRef } from 'react';

const PhoneInput = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    // Move to the next input if the current one has a value
    if (e.target.value.length >= 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <>
        <label className="block text-sm font-medium text-gray-700 mt-5 mb-1" htmlFor="phone">OTP*</label>      {Array.from({ length: 4 }).map((_, index) => (
        <input
          key={index}
          type="text"
          ref={el => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          className="border-b border-gray-900 text-dark focus:outline-none focus:ring-0 focus:border-blue-1000 12 text-center mb-4"
          maxLength={1} // Limit input to a single character
          placeholder="-"
        />
      ))}
    </>
  );
};

export default PhoneInput;
