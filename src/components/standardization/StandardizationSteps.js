import React from 'react';
import StepOne from './StepOne';

const StandardizationSteps = () => {
  return (
    <div className="intro-slideshow">
      <ul style={{ listStyle: 'none' }}>
        <StepOne />
      </ul>
    </div>
  );
};

export default StandardizationSteps;
