import React from 'react';
import StepOne from './StepOne';

const StandardizationSteps = () => {
  return (
    <div className="intro-slideshow">
      <ul style={{ listStyle: 'none' }} className="m-1 p-0">
        <StepOne />
      </ul>
    </div>
  );
};

export default StandardizationSteps;
