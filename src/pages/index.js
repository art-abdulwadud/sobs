import * as React from 'react';

import { connect } from 'react-redux';
import Layout from '../components/layout';
import NavBar from '../components/navbar/NavBar';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <NavBar />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(IndexPage);
