import React from 'react';
import SingleOption from './SingleOption';

const ApplicationOptions = () => {
  return (
    <>
      <div className="grid mt-5 p-2">
        <SingleOption option="Application History" optionCount="0 Applications" />
        <SingleOption option="New Application" optionCount="0 Applications" />
        <SingleOption option="Quick Links" optionCount="0 Applications" />
        <SingleOption option="Application History" optionCount="0 Applications" />
      </div>
    </>
  );
};

export default ApplicationOptions;
