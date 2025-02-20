import React from "react";
import "./Kpi.css";


const KpiElement = ({ title, text, image }) => {
  return ( 
    <div className="kpi-element"> 
        <div className="kpi-content">
            <div className="kpi-text">
                <h1 className="kpi-header">{title}</h1>
                <p className="kpi-title">{text}</p>
            </div>
            <img className="kpi-img" src={image} alt={title} />
        </div>
    </div>
  );
}

export default KpiElement;
