import React from 'react';
import { Toast } from 'primereact/toast';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Login from '../components/login/Login';

const login = ({ toast }) => {
  return (
    <Layout>
      <Seo title="Login" />
      <Toast ref={toast} position="top-right" className="text-left m-w-300" />
      <Login />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  toast: state.auth.toast
});

export default connect(mapStateToProps)(login);
