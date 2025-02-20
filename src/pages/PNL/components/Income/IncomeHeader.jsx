// IncomeHeader.js
import React from 'react';

const IncomeHeader = ({ selectedTimeframe, handleTimeframeChange }) => {
  return (
    <div className="income-header">
      <select
        value={selectedTimeframe}
        onChange={handleTimeframeChange}
        className="timeframe-select"
      >
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="all">All Time</option>
      </select>
    </div>
  );
};

export default IncomeHeader;
