import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentDate, setCurrentDate] = useState(""); // Состояние для текущей даты
  const [currentTime, setCurrentTime] = useState(""); // Состояние для текущего времени

  // Функция для обновления даты и времени каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString()); // Обновление даты
      setCurrentTime(now.toLocaleTimeString()); // Обновление времени
    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <h1>PNL</h1>
      <div className="date-time">
        <p className="time">{currentTime}</p>
        <p className="date">{currentDate}</p>
        
      </div>
    </div>
  );
};

export default Header;
