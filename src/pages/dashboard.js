import * as React from 'react';

import { connect } from 'react-redux';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar/Sidebar';
import Seo from '../components/seo';

const DashboardPage = () => {
  return (
    <Layout>
      <Seo title="Dashboard" />
      <Sidebar />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(DashboardPage);
