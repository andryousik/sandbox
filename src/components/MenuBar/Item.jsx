import React from "react";
import PropTypes from "prop-types";
import "./MenuBar.css";

const Item = ({ text, icon, onClick, className }) => {
  return (
    <button className={`item-button ${className}`} onClick={onClick}>
      <span className="item-icon">
        <img src={icon} alt={text} width="24px" height="24" />
      </span>
      <span className="item-text">{text}</span>
    </button>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Item.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Item;
