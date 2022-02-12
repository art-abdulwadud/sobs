import React from 'react';
import { Button } from 'primereact/button';
import image from '../../images/bg_images/standards.jpeg';

const isBrowser = typeof window !== 'undefined';

const StepOne = () => {
  return (
    <li className="pt-4 pe-2 ps-2 w-100 h-100" style={{ overflow: 'hidden' }}>
      <div className="d-flex center w-100 column" style={{ minHeight: '80%' }}>
        <div className="grid grid-nogutter surface-section text-800 shadow-5 w-100" style={{ minHeight: '80vh' }}>
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span className="block text-6xl font-bold mb-1">Explore</span>
              <div className="text-6xl text-primary font-bold mb-3 f2">Standards</div>
              <p className="mt-0 mb-4 text-700 line-height-3">Standards define best approach in many different areas. A standard is a publication of a formal document (the standards), generally developed by consensus, containing the requirements a product, process or service should comply with. Standards are essentially voluntary in nature and producers can choose when to use them.</p>
            </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden d-flex center column pb-3" style={{ alignItems: 'center', justifyContent: 'end', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`, backgroundSize: 'cover' }}>
            <section className="d-flex column">
              <Button label="Learn more about Standards" className="p-button-rounded white-bg-h dark-c mb-3 f3" style={{ fontSize: '1.3em', minWidth: '400px' }} onClick={(ev) => {
                ev.preventDefault();
                isBrowser && typeof document !== 'undefined' ? document.querySelector('#step-two').scrollIntoView() : null;
              }} />
              <Button label="Somali Standards Catalogue" className="p-button-rounded white-bg-h dark-c mb-3 f3" onClick={(ev) => {
                ev.preventDefault();
                isBrowser && typeof document !== 'undefined' ? document.querySelector('#step-three').scrollIntoView() : null;
              }} style={{ fontSize: '1.3em', minWidth: '400px' }} />
              <Button label=" International Standards Catalogue" className="p-button-rounded white-bg-h dark-c f3" style={{ fontSize: '1.3em', minWidth: '400px' }}
              onClick={(ev) => {
                ev.preventDefault();
                isBrowser && typeof document !== 'undefined' ? document.querySelector('#step-four').scrollIntoView() : null;
              }} />
            </section>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StepOne;
