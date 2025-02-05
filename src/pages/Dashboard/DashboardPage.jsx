import React, { useState } from 'react';
import Header from './components/Header/Header';
import TimeFrameSelector from './components/TimeFrameSelector/TimeFrameSelector';
import Stats from './components/Stats/Stats';
import ContainerStatus from './components/ContainerStatus/ContainerStatus';
import PNL from './components/PNL/PNL';


const DashboardPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1 day");

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
      <PNL />
    </div>
  );
};

export default DashboardPage;
