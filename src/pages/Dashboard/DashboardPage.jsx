import React, { useState } from 'react';
import Header from './components/Header';
import TimeFrameSelector from './components/TimeFrameSelector';
import Stats from './components/Stats';
import ContainerStatus from './components/ContainerStatus';
import PNL from './components/PNL';


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
