import React from 'react';

const contframes = ["1", "2", "3", "4", "5"];

const SelectContainer = ({ selectedContainer, setSelectedContainer }) => {
  return (
    <div className="container-select">
      <label className="con">Container number: </label>
      <select 
        value={selectedContainer} 
        onChange={(e) => setSelectedContainer(e.target.value)}
        className="select-dropdown"
      >
        {contframes.map((cont, index) => (
          <option key={index} value={cont}>{cont}</option>
        ))}
      </select>
      asdasd
    </div>
  );
};

export default SelectContainer;
