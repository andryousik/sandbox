import React, { useState } from 'react';
import Header from './compomets/Header/Header';
import SelectContainer from './compomets/SelectContainer/SelectContainer';

const PNLPage = () => {

  const [selectedContainer, setselectedContainer] = useState("1");
  return (
    <div className='pnl-page'>
          <Header/>
          <hr className="divider" />
          <SelectContainer
          selectedContainer={selectedContainer} 
          setselectedContainer={setselectedContainer} 
          />
    </div>
  );
};

export default PNLPage;
