import React, { useState } from 'react';

// Импортируем изображение, двигаясь на два уровня вверх
import graphImage from '../../../images/graph.png'; // Путь к изображению из папки src/images/

const statsData = [
  { title: "Money spent", value: "5000€" },
  { title: "Revenue", value: "12000€" },
  { title: "Working containers", value: "35" },
  { title: "KWh for spent money", value: "2500 KWh" },
  { title: "System efficiency", value: "85%" },
  { title: "Today KWh", value: "450 KWh" }
];

const options = statsData.map(item => item.title);

const Stats = ({ selectedTimeframe, setSelectedTimeframe }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="revenue" style={{ marginTop: '20px' }}>
      <div className="stats-container">
        <div className="stats-row">
          {statsData.slice(0, 3).map((item, index) => (
            <div className="stat-box" key={index}>
              <div className="stat-content">
                <div className="stat-text">
                  <p className="stat-title">{item.title}</p>
                  <p className="stat-value">{item.value}</p>
                </div>
                {/* Используем импортированное изображение */}
                <img src={graphImage} alt="Graph" className="stat-image" />
              </div>
            </div>
          ))}
        </div>
        <div className="spacer"></div>
        <div className="stats-row">
          {statsData.slice(3, 6).map((item, index) => (
            <div className="stat-box" key={index + 3}>
              <div className="stat-content">
                <div className="stat-text">
                  <p className="stat-title">{item.title}</p>
                  <p className="stat-value">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-header">
          <h2>{selectedTimeframe}</h2> 
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <hr className="chart-divider" />
        <div className="chart">
          <p>График (тут будет график)</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
