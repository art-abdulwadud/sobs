import React from 'react';
import { Toast } from 'primereact/toast';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Seo from '../components/seo';
import SignUp from '../components/signup/SignUp';

const signup = ({ toast }) => {
  return (
    <Layout>
      <Seo title="Sign Up" />
      <Toast ref={toast} position="top-right" className="text-left m-w-300" />
      <SignUp />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  toast: state.auth.toast
});

export default connect(mapStateToProps)(signup);
