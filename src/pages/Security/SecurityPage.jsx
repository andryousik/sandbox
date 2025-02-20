import React, { useEffect, useState } from 'react';
import Header from '../Security/components/Header/Header';
import AddNewElement from './components/AddNewElement/AddNewElement';
import './components/AddNewElement/AddNewElement.css';

const SecurityPage = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    // Загружаем контейнеры из локального хранилища при загрузке страницы
    const savedContainers = JSON.parse(localStorage.getItem("containers")) || [];
    setContainers(savedContainers);
  }, []);

  return (
    <div className='security'>
      <Header />
      <hr className="divider" />
      <AddNewElement initialContainers={containers} />
    </div>
  );
};

export default SecurityPage;
