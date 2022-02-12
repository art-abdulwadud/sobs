import { navigate } from 'gatsby-link';
import React from 'react';

const Services = () => {
  return (
    <div className="surface-section px-4 py-4 md:px-6 lg:px-8 text-center linear-bg">
      <div className="mb-3 font-bold text-2xl">
        <span className="text-900 dark-c">One Product, </span>
        <span className="text-900 text-white">Many Solutions</span>
      </div>
      <div className="honeydew text-sm mb-6 f3">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5 cursor" onClick={() => navigate('/standardization')}>
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-book text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">STANDARDIZATION</div>
          <span className="honeydew text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">INSPECTION</div>
          <span className="honeydew text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-filter text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">TESTING</div>
          <span className="honeydew text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-id-card text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">CERTIFICATION</div>
          <span className="honeydew text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-moon text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">METROLOGY</div>
          <span className="honeydew text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3 cursor">
          <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
            <i className="pi pi-star text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">ACCREDITATION</div>
          <span className="honeydew text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
