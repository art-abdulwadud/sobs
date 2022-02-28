import React from 'react';
import iso from '../../images/iso.jpeg';
import iec from '../../images/iec.png';
import smiic from '../../images/smiic.jpeg';
import arso from '../../images/arso.jpeg';

const StepFour = () => {
  return (

    <div className="surface-section px-4 py-8 md:px-6 lg:px-8" id="step-four">
      <div className="font-bold text-900 text-3xl mb-3 text-center">International Standards</div>
      <div className="flex flex-wrap" style={{ alignItems: 'baseline' }}>
        <div className="w-full lg:w-6 xl:w-3 p-5">
          <img src={iso} alt="Image" className="w-full" />
          <div className="mt-3 mb-2 font-medium text-900 text-xl">International Organisation for Standardization (ISO)</div>
          <span className="text-700 line-height-3">Explore ISO adopted standards catalogue</span>
          <a tabIndex="0" className="cursor text-blue-500 font-medium flex align-items-center mt-2">
            <span>Explore</span>
            <i className="pi pi-arrow-right ml-3"></i>
          </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
          <img src={iec} alt="Image" className="w-full" />
          <div className="mt-3 mb-2 font-medium text-900 text-xl">International Electrotechnical Commission (IEC)</div>
          <span className="text-700 line-height-3">Explore IEC adopted standards catalogue</span>
          <a tabIndex="0" className="cursor text-blue-500 font-medium flex align-items-center mt-2">
            <span>Explore</span>
            <i className="pi pi-arrow-right ml-3"></i>
          </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
          <img src={smiic} alt="Image" className="w-full" />
          <div className="mt-3 mb-2 font-medium text-900 text-xl">Standards and Metrology Institute for Islamic Countries (SMIIC)</div>
          <span className="text-700 line-height-3">Explore SMIIC adopted standards catalogue</span>
          <a tabIndex="0" className="cursor text-blue-500 font-medium flex align-items-center mt-2">
            <span>Explore</span>
            <i className="pi pi-arrow-right ml-3"></i>
          </a>
        </div>
        <div className="w-full lg:w-6 xl:w-3 p-5">
          <img src={arso} alt="Image" className="w-full" />
          <div className="mt-3 mb-2 font-medium text-900 text-xl">African Organisation for Standardization (ARSO)</div>
          <span className="text-700 line-height-3">Explore ARSO adopted standards catalogue</span>
          <a tabIndex="0" className="cursor text-blue-500 font-medium flex align-items-center mt-2">
            <span>Explore</span>
            <i className="pi pi-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </div>

  );
};

export default StepFour;
