import React from 'react';
import '../assets/scss/Button.scss';

const Button = ({ label, handleClick, type, width, ...props }) => {
  function classChange(type) {
    console.log(type);
    switch (type) {
      case 'commonPrimary':
        return 'buttonComp commonPrimary';
      case 'commonSecondary':
        return 'buttonComp commonSecondary';
      case 'outlinePrimary':
        return 'buttonComp outlinePrimary';
      case 'outlineSecondary':
        return 'buttonComp outlineSecondary';
      case 'textOnlyPrimary':
        return 'buttonComp textOnlyPrimary';
      case 'textOnlySecondary':
        return 'buttonComp textOnlySecondary';
      default:
        return 'buttonComp commonPrimary';
    }
  }

  return (
    <button
      className={classChange(type)}
      onClick={handleClick}
      style={{ width: `${width}` }}>
      {label}
    </button>
  );
};

export default Button;
