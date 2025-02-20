import React from "react";
import EnergyBox from "./EnergyBox/EnergyBox";
import containerImage from "../../../../images/efficiency.png";
import energyImage from "../../../../images/graph.png";
import "./EnergyBox/EnergyBox.css";
import "./EnergySpent.css";

const mockData = {
  total: "418,317 KWh",
  perMonth: "61,522 KWh",
  perDay: "5,412 KWh",
};

const EnergySpent = () => {
  return (
    <div className="energy-spent-container">
      <h1>Cumulative KWh</h1>
    <div className="energy-container">
      
      <div className="energy-container-left-right">
        
        <div className="energy-left">
          <EnergyBox header="Total KWh" title={mockData.total} image={energyImage} />
          <EnergyBox header="KWh per month" title={mockData.perMonth} image={energyImage} />
          <EnergyBox header="KWh per day" title={mockData.perDay} image={energyImage} />
        </div>
        <div className="energy-right">
          <img src={containerImage} alt="Energy Graph" className="graph-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default EnergySpent;
