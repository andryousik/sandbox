import React from 'react';

const timeframes = ["1 day", "1 week", "1 month", "1 year", "All time"];

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
