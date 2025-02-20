import React from 'react';
import './TimeFrameSelector.css';

const timeframes = ["day", "week", "month", "year", "All time"];

const TimeFrameSelector = ({ selectedTimeframe, setSelectedTimeframe }) => {
  return (
    <div className="time-frame">
      <label>Timeframe: </label>
      <select 
        value={selectedTimeframe} 
        onChange={(e) => setSelectedTimeframe(e.target.value)}
      >
        {timeframes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TimeFrameSelector;
