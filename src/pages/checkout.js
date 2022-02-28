import * as React from 'react';

import { connect } from 'react-redux';
import CheckoutCalc from '../components/checkout/CheckoutCalc';
import CheckoutTable from '../components/checkout/CheckoutTable';
import Layout from '../components/layout';
import NavBar from '../components/navbar/NavBar';
import Seo from '../components/seo';

const CheckoutPage = () => {
  return (
    <Layout>
      <Seo title="Checkout" />
      <NavBar />
      <div className="m-2">
        <CheckoutTable />
      </div>
      <CheckoutCalc />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(CheckoutPage);
