import React, { useState } from 'react';
import IncomeHeader from './IncomeHeader'; 
import GraphContainer from './GraphContainer'; 
import './Income.css';

// Графики для Cumulative Income
import dayIncome from '../../../../images/day_income.png';
import weekIncome from '../../../../images/week_income.png';
import monthIncome from '../../../../images/month_income.png';
import yearIncome from '../../../../images/year_income.png';
import allTimeIncome from '../../../../images/all_time_income.png';

// Графики для Revenue
import dayRevenue from '../../../../images/day_revenue.png';
import weekRevenue from '../../../../images/week_revenue.png';
import monthRevenue from '../../../../images/month_revenue.png';
import yearRevenue from '../../../../images/year_revenue.png';
import allTimeRevenue from '../../../../images/all_time_revenue.png';

const Income = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('day');

  const handleTimeframeChange = (e) => {
    setSelectedTimeframe(e.target.value);
  };

  // Определяем, какие изображения использовать
  const incomeImages = {
    day: dayIncome,
    week: weekIncome,
    month: monthIncome,
    year: yearIncome,
    all: allTimeIncome
  };

  const revenueImages = {
    day: dayRevenue,
    week: weekRevenue,
    month: monthRevenue,
    year: yearRevenue,
    all: allTimeRevenue
  };

  return (
    <div className="income-container">
      <IncomeHeader 
        selectedTimeframe={selectedTimeframe} 
        handleTimeframeChange={handleTimeframeChange} 
      />
      
      <div className="income-graphs">
        <div className="income-box">
          <p className="graph-title">Cumulative Income</p>
          <GraphContainer image={incomeImages[selectedTimeframe]} />
        </div>

        <div className="income-box">
          <p className="graph-title">Revenue</p>
          <GraphContainer image={revenueImages[selectedTimeframe]} />
        </div>
      </div>
    </div>
  );
};

export default Income;
