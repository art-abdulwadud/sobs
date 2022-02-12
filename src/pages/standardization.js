import React from 'react';
import { connect } from 'react-redux';
import { Toast } from 'primereact/toast';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { setShowSidebar } from '../state/sidebar/sidebar.actions';
import NavBar from '../components/navbar/NavBar';
import StandardizationSteps from '../components/standardization/StandardizationSteps';
import StepTwo from '../components/standardization/StepTwo';
import StepThree from '../components/standardization/StepThree';
import StepFour from '../components/standardization/StepFour';

const standardization = ({ toast }) => {
  return (
    <Layout>
      <Seo title="Standardization" />
      <Toast ref={toast} position="top-right" className="text-left m-w-300" />
      <div className="intro-header">
        <NavBar />
        <StandardizationSteps />
        <StepTwo />
        <div className="p-3">
          <StepThree />
        </div>
        <div className="p-3">
          <StepFour />
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  showSidebar: state.sidebar.showSidebar,
  toast: state.auth.toast
});

const mapDispatchToProps = (dispatch) => ({
  setShowSidebar: (state) => dispatch(setShowSidebar(state))
});
export default connect(mapStateToProps, mapDispatchToProps)(standardization);
