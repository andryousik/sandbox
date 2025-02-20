import React from "react";
import IncomeImage from '../../../../images/efficiency.png';
import CumulativeImage from '../../../../images/month_income.png';
import './Earnings.css'; // Подключаем стили

const Earnings = () => {
  return (
    <div className="earnings-container">
      {/* Левая часть - Daily Income */}
      <div className="earnings-box">
        <h2 className="earnings-title">Daily Income</h2>
        <div className="earnings-image-wrapper">
          <img src={IncomeImage} alt="Daily Income" className="earnings-image"/>
        </div>
      </div>

      {/* Правая часть - Cumulative Earnings */}
      <div className="earnings-box">
        <h2 className="earnings-title">Cumulative Earnings</h2>
        <div className="earnings-image-wrapper">
          <img src={CumulativeImage} alt="Cumulative Earnings" className="earnings-image"/>
        </div>
      </div>
    </div>
  );
}

export default Earnings;
