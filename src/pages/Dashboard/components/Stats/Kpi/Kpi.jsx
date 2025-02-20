import React from "react";
import KpiElement from "./KpiElement";
import "./Kpi.css";

const Kpi = ({ data }) => {
  return (
    <div className="kpi-container">
      {data.map((item, index) => (
        <KpiElement 
          key={index} 
          title={item.title} 
          text={item.text} 
          image={item.image} 
        />
      ))}
    </div>
  );
};

export default Kpi;
