import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';


/*Dashboard*/
import DashboardPage from './pages/Dashboard/DashboardPage';
import './pages/Dashboard/DashboardPage.css';
import './pages/Dashboard/components/ContainerStatus/ContainerStatus';
import './pages/Dashboard/components/ContainerStatus/ContainerStatus.css';
import './pages/Dashboard/components/Header/Header';
import './pages/Dashboard/components/Header/Header.css';
import './pages/Dashboard/components/PNL/PNL';
import './pages/Dashboard/components/PNL/PNL.css';
import './pages/Dashboard/components/Stats/Stats';
import './pages/Dashboard/components/Stats/Stats.css';
import './pages/Dashboard/components/TimeFrameSelector/TimeFrameSelector';
import './pages/Dashboard/components/TimeFrameSelector/TimeFrameSelector.css';


import ControlPanelPage from './pages/ControlPanel/ControlPanelPage';
import './pages/ControlPanel/ControlPanelPage.css';

import PNLPage from './pages/PNL/PNLPage';
import './pages/PNL/PNLPage.css';
import './pages/PNL/components/Income/Income'
import './pages/PNL/components/Income/Income.css'
import './pages/PNL/components/Income/GraphContainer'
import './pages/PNL/components/Income/IncomeHeader'

import HistoryPage from './pages/History/HistoryPage';
import './pages/History/HistoryPage.css';

import SecurityPage from './pages/Security/SecurityPage';
import './pages/Security/SecurityPage.css';

import LoginPage from './pages/Login/LoginPage';
import './pages/Login/LoginPage.css';

import ProfilePage from './pages/Profile/ProfilePage';
import './pages/Profile/ProfilePage.css';

import './App.css';

import EditContainer from './pages/Security/components/EditContainer/EditContainer';

function App() {
  return (
    <Router>
      {/* Используем BrowserRouter как Router */}
      <div className="App__inner">
        <MenuBar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/control-panel" element={<ControlPanelPage />} />
          <Route path="/pnl" element={<PNLPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-container/:id" element={<EditContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
