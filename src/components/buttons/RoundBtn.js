import React from 'react';

const RoundBtn = ({ type, text, handleClick, name }) => {
  return (
    <button id={name} className="round-btn f3 mt-2" type={type} onClick={handleClick ? handleClick() : null}>
      {text}
    </button>
  );
};

export default RoundBtn;
