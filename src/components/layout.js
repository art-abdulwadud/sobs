import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'gatsby-plugin-firebase';

import './layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { connect } from 'react-redux';
import { checkPageLoading, checkUser } from '../state/auth/auth.actions';

const Layout = ({ children }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkPageLoading(true);
        checkUser({ id: user.uid, email: user.email });
        checkPageLoading(false);
      } else {
        checkPageLoading(true);
        checkUser({});
        checkPageLoading(false);
      }
    });
  }, []);
  return (
    <main>
      {children}
    </main>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUser: (user) => dispatch(checkUser(user)),
  checkPageLoading: (state) => dispatch(checkPageLoading(state))
});

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(null, mapDispatchToProps)(Layout);
