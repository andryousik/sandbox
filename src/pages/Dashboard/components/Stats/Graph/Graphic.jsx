import React, { useState } from "react";
import "./Graphic.css";

const titles = [
  "Money spent",
  "Revenue",
  "Working containers",
  "KWh for spent money",
  "System efficiency",
  "Today KWh"
];

const Graphic = ({ selectedTimeframe }) => {
  const [selectedMetric, setSelectedMetric] = useState(titles[0]);

  return (
    <div className="graphic-container">
      {/* Заголовок с выбором показателя */}
      <div className="graphic-header">
        <h2>{selectedTimeframe} Overview</h2>
        <select
          className="metric-selector"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          {titles.map((metric, index) => (
            <option key={index} value={metric}>
              {metric}
            </option>
          ))}
        </select>
      </div>

      {/* Место для графика */}
      <div className="graphic-content">
        <div className="graphic-placeholder">
          [GRAPH FOR {selectedMetric}]
        </div>
      </div>
    </div>
  );
};

export default Graphic;
