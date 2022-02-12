import React from 'react';
import { Toast } from 'primereact/toast';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Seo from '../components/seo';

const login = ({ toast }) => {
  return (
    <Layout>
      <Seo title="Login" />
      <Toast ref={toast} position="top-right" className="text-left m-w-300" />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  toast: state.auth.toast
});

export default connect(mapStateToProps)(login);
