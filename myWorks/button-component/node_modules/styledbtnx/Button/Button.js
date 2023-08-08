import React from 'react';
import './Button.css';

const Button = ({ onClick, text, type = 'default' }) => {

  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
