import React, { useState } from 'react';
import Header from './components/Header/Header';
import SelectContainer from './components/SelectContainer/SelectContainer';
import Revenue from './components/Revenue/Revenue';
import Income from './components/Income/Income';
import EnergySpent from './components/EnergySpent/EnergySpent'
import "./components/EnergySpent/EnergySpent.css"
import "./components/SelectContainer/SelectContainer.css"
import Earnings from './components/Earnings/Earnings';
import ContainerStatus from '../Dashboard/components/ContainerStatus/ContainerStatus';

const PNLPage = () => {

  const [selectedContainer, setSelectedContainer] = useState("1");
  return (
    <div className='pnl-page'>
          <Header/>
          <hr className="divider" />
          <SelectContainer
          selectedContainer={selectedContainer} 
          setSelectedContainer={setSelectedContainer} 
          />
          <Revenue/>
          <Income/>
          <EnergySpent/>
          <Earnings/> 
          <ContainerStatus/>
    </div>
  );
};

export default PNLPage;
