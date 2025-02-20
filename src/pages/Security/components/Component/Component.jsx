import React from "react";
import { GoContainer } from "react-icons/go";
import { useNavigate } from "react-router-dom"; // Используем useNavigate вместо useHistory
import "./Component.css";

const Component = ({ number, description }) => {
  const navigate = useNavigate(); // Инициализируем хук navigate

  // Функция для обработки выбора контейнера
  const handleSelect = (number) => {
    navigate(`/edit-container/${number}`); // Перебрасываем на страницу редактирования
  };

  return (
    <div className="component" onClick={() => handleSelect(number)}>
      <div className="component-img">
        <GoContainer size={40} />
      </div>
      <div className="component-text">
        <h2>Container #{number}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Component;
