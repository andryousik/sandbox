import React from 'react';

const timeframes = ["1 ", "2 ", "3 ", "4 ", "5 "];

const SelectContainer = ({ selectedContainer, setSelectedContainer }) => {
  return (
    <div className="container-select">
      <label>Container number: </label>
      <select 
        value={selectedContainer} 
        onChange={(e) => setSelectedContainer(e.target.value)}
      >
        {timeframes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectContainer;
