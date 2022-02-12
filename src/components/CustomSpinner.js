import React from 'react';

const CustomSpinner = ({ color, xtraClass }) => {
  return (
    <div className={`preloader d-flex center text-center ${xtraClass || ''}`}>
      <div className={`spinner ${color && color === 'dark' ? 'dark-spinner' : 'orange-spinner'}`}></div>
    </div>
  );
};

export default CustomSpinner;
