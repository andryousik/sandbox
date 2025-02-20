import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../Component/Component";
import "./AddNewElement.css";

const AddNewElement = () => {
  const [containers, setContainers] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const navigate = useNavigate();
  const clickTimeout = useRef(null); // Храним таймер в useRef

  useEffect(() => {
    const savedContainers = JSON.parse(localStorage.getItem("containers")) || [];
    setContainers(savedContainers);
    if (savedContainers.length > 0) {
      setNextId(Math.max(...savedContainers.map((c) => c.id)) + 1);
    }
  }, []);

  useEffect(() => {
    if (containers.length > 0) {
      localStorage.setItem("containers", JSON.stringify(containers));
    }
  }, [containers]);

  useEffect(() => {
    return () => {
      // Очистка таймера при размонтировании компонента
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };
  }, []);

  const handleAdd = () => {
    const newContainer = {
      id: nextId,
      description: `Container ${nextId}`,
    };
    const updatedContainers = [...containers, newContainer];
    setContainers(updatedContainers);
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
    setNextId(nextId + 1);
  };

  const handleClick = (id) => {
    if (deleteMode) {
      // Если режим удаления включен, просто выбираем контейнер для удаления
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.includes(id)
          ? prevSelectedIds.filter((selectedId) => selectedId !== id)
          : [...prevSelectedIds, id]
      );
    } else {
      // Устанавливаем таймер для определения одиночного клика
      clickTimeout.current = setTimeout(() => {
        console.log("Single click - no action (only select mode)");
      }, 300);
    }
  };

  const handleDoubleClick = (id) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current); // Отменяем одиночный клик
    }
    navigate(`/edit/${id}`);
  };

  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode);
    if (!deleteMode) {
      setSelectedIds([]);
    }
  };

  const handleDelete = () => {
    const updatedContainers = containers.filter((container) => !selectedIds.includes(container.id));
    setContainers(updatedContainers);
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
    setSelectedIds([]);
    setDeleteMode(false);
  };

  return (
    <div>
      <div className="button-row">
        <button className="add-button" onClick={handleAdd}>+</button>
        <h1>Create a new component</h1>
        <button className="delete-button" onClick={toggleDeleteMode}>
          {deleteMode ? "Cancel" : "Delete"}
        </button>
        {deleteMode && (
          <button className="confirm-delete-button" onClick={handleDelete} disabled={selectedIds.length === 0}>
            Confirm Delete
          </button>
        )}
      </div>
      <div className="container-list">
        {containers.map((container) => (
          <Component
            key={container.id}
            number={container.id}
            description={container.description}
            onClick={() => handleClick(container.id)}
            onDoubleClick={() => handleDoubleClick(container.id)}
            isSelected={selectedIds.includes(container.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddNewElement;
