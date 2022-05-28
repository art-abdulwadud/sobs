import * as React from 'react';

import { connect } from 'react-redux';
import Layout from '../components/layout';
import NavBar from '../components/navbar/NavBar';
import Seo from '../components/seo';

const DashboardPage = () => {
  return (
    <Layout>
      <Seo title="Dashboard" />
      <NavBar />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(DashboardPage);
