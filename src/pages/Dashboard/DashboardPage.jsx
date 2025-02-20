import React, { useState } from 'react';
import Header from './components/Header/Header';
import TimeFrameSelector from './components/TimeFrameSelector/TimeFrameSelector';
import Stats from './components/Stats/Stats';
import ContainerStatus from './components/ContainerStatus/ContainerStatus';
import Earnings from '../PNL/components/Earnings/Earnings';

const DashboardPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("day");

  return (
    <div className="dashboard">
      <Header />
      <hr className="divider" />
      <TimeFrameSelector
      selectedTimeframe={selectedTimeframe} 
      setSelectedTimeframe={setSelectedTimeframe}
      />
      <Stats 
      selectedTimeframe={selectedTimeframe} 
      setSelectedTimeframe={setSelectedTimeframe}/>
      <ContainerStatus />
      <Earnings/>
    </div>
  );
};

export default DashboardPage;
