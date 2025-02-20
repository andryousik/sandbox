import React from 'react';
import moneySpentImg from '../../../../images/money_spent.png';
import revenueImg from '../../../../images/revenue.png';
import workingContainersImg from '../../../../images/working_containers.png';
import kwhSpentImg from '../../../../images/kwh_spent.png';
import efficiencyImg from '../../../../images/efficiency.png';
import todayKwhImg from '../../../../images/today_kwh.png';


const statsData = {
  "Money spent": moneySpentImg,
  "Revenue": revenueImg,  
  "Working containers": workingContainersImg,
  "KWh for spent money": kwhSpentImg,
  "System efficiency": efficiencyImg,
  "Today KWh": todayKwhImg
};

const Chart = ({ selectedTimeframe, selectedOption, setSelectedOption }) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>{selectedTimeframe}</h2>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          {Object.keys(statsData).map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <hr className="chart-divider" />
      <div className="chart">
        <img src={statsData[selectedOption]} alt={selectedOption} className="chart-image" />
      </div>
    </div>
  );
};

export default Chart;
