import React from 'react';
import { Button } from 'primereact/button';

const isBrowser = typeof window !== 'undefined';

const StepOne = () => {
  return (
    <li className="pt-4 pe-2 ps-2 w-100 h-100" style={{ overflow: 'hidden' }}>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="grid">
          <div className="col-12 md:col-6">
            <span className="block text-6xl font-bold mb-1">Explore</span>
            <div className="text-6xl text-primary font-bold mb-3 f2">
              Standards
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              In Somalia, Somali Bureau Of Standards Is The Sole Body
              Responsible For The Production, Development, Adoption And
              Publication Of Standards That Provide Requirements For Materials,
              Manufacturing, Testing, Packaging And Labeling To Ensure That
              Products, Processes And Services Are Fit For Their Purpose.
            </p>
          </div>
          <div className="col-12 md:col-6 flex align-items-center md:justify-content-end">
            <div>
              <section className="d-flex column">
                <Button
                  label="Learn more about Standards"
                  iconPos="right"
                  icon="pi pi-chevron-right"
                  className="p-button-rounded linear-bg-h mb-3 f3 shadow-4"
                  style={{ fontSize: '1.3em', minWidth: '400px' }}
                  onClick={(ev) => {
                    ev.preventDefault();
                    isBrowser && typeof document !== 'undefined'
                      ? document.querySelector('#step-two').scrollIntoView()
                      : null;
                  }}
                />
                <Button
                  label="Somali Standards Catalogue"
                  iconPos="right"
                  icon="pi pi-chevron-right"
                  className="p-button-rounded linear-bg-h mb-3 f3 shadow-4"
                  onClick={(ev) => {
                    ev.preventDefault();
                    isBrowser && typeof document !== 'undefined'
                      ? document.querySelector('#step-three').scrollIntoView()
                      : null;
                  }}
                  style={{ fontSize: '1.3em', minWidth: '400px' }}
                />
                <Button
                  label=" International Standards Catalogue"
                  iconPos="right"
                  icon="pi pi-chevron-right"
                  className="p-button-rounded linear-bg-h f3 shadow-4"
                  style={{ fontSize: '1.3em', minWidth: '400px' }}
                  onClick={(ev) => {
                    ev.preventDefault();
                    isBrowser && typeof document !== 'undefined'
                      ? document.querySelector('#step-four').scrollIntoView()
                      : null;
                  }}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StepOne;
