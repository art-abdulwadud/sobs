import React from 'react';
import { Button } from 'primereact/button';

const StepFour = () => {
  return (
    <div className="surface-card shadow-4 border-round p-4" id="step-four">
      <div className="flex align-items-center justify-content-between mb-3">
        <div className="text-900 font-medium text-xl">International Standards Catalogue</div>
      </div >
      <ul className="list-none p-0 m-0">
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2 cursor">SMIIC</span>
              <div className="text-700 mb-2"></div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Explore" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-reply" onClick={() => console.log('hello')} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">AIDSMO</span>
              <div className="text-700"></div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Explore" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-reply" onClick={() => console.log('hello')} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">ISO</span>
              <div className="text-700"></div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Explore" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-reply" onClick={() => console.log('hello')} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">ARSO</span>
              <div className="text-700"></div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Explore" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-reply" onClick={() => console.log('hello')} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">IEC</span>
              <div className="text-700"></div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Explore" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-reply" onClick={() => console.log('hello')} />
          </span>
        </li>
      </ul>

      <div className="flex w-full relative align-items-center justify-content-center my-3 px-4">
        <div className="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
        <div className="px-2 z-1 surface-0 flex align-items-center">
          <span className="text-900 font-medium"><Button label="Show all" className="p-button-rounded linear-bg-h m-1"
            onClick={() => console.log('hello')} /></span>
        </div>
      </div>

    </div>
  );
};

export default StepFour;
