import { navigate } from 'gatsby-link';
import React from 'react';

const Services = () => {
  return (
    <div className="surface-section px-4 py-4 md:px-6 lg:px-8 text-center linear-bg">
      <div className="mb-3 font-bold text-2xl">
        <span className="text-900 text-white">Conformity Assessment Portal</span>
      </div>
      <div className="honeydew text-sm mb-6 f3">Promoting Conformity Assessment Schemes in Somalia</div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5 cursor" onClick={() => navigate('/standardization')}>
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-book text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">STANDARDIZATION</div>
          <span className="honeydew text-sm line-height-3">Purchase Somali and International Standards Now.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor" onClick={() => navigate('/inspection')}>
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">INSPECTION</div>
          <span className="honeydew text-sm line-height-3">Apply for Consignment Based Conformity Assessment inspection now.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-filter text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">TESTING</div>
          <span className="honeydew text-sm line-height-3">Apply for Sample or Batch Testing now.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-id-card text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">CERTIFICATION</div>
          <span className="honeydew text-sm line-height-3">Apply for product certification to expedite credible trade.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-moon text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">METROLOGY</div>
          <span className="honeydew text-sm line-height-3">Apply for calibration of measurements and metrology services.</span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-star text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">ACCREDITATION</div>
          <span className="honeydew text-sm line-height-3">Apply for accreditation and gain recognition now.</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
