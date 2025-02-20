import './EnergyBox.css'
import React from "react";

const EnergyBox = ({ header, title, image }) => {
  return ( 
    <div className="energy-box">
      <div className="energy-box-content"> 
        <div className="energy-box-content-header">{header}</div>
        <div className="energy-box-content-title">{title}</div>
      </div>
        <img className="energy-box-img" src={image} alt={header} />
    </div>
   );
}
 
export default EnergyBox;
