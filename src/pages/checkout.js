import * as React from 'react';

import { connect } from 'react-redux';
import CheckoutCalc from '../components/checkout/CheckoutCalc';
import Layout from '../components/layout';
import NavBar from '../components/navbar/NavBar';
import Seo from '../components/seo';

const CheckoutPage = () => {
  return (
    <Layout>
      <Seo title="Checkout" />
      <NavBar />
      <CheckoutCalc />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(CheckoutPage);
