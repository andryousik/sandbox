import React from 'react';

const GraphContainer = ({ image }) => {
  return (
    <div className="graph-container">
      <img src={image} alt="Graph" className="graph-image" /> 
    </div>
  );
};

export default GraphContainer;
