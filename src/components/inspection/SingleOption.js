import React from 'react';

const SingleOption = ({ option, optionCount, icon }) => {
  return (
    <div className="col-12 lg:col-6 xl:col-3">
      <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
        <div className="flex justify-content-between mb-3">
          <div>
            <span className="block text-500 font-medium mb-3">{option}</span>
            <div className="text-900 font-medium text-xl">{optionCount}</div>
          </div>
          <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
            <i className={`pi ${icon} text-blue-500 text-xl`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOption;
