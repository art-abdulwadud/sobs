import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import firebase from 'gatsby-plugin-firebase';
import './layout.css';
import './fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { connect } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { checkPageLoading, checkUser, setToast } from '../state/auth/auth.actions';

const Layout = ({ children, pageLoading, checkPageLoading, checkUser, setToast }) => {
  const ref = useRef(null);
  useEffect(() => {
    setToast(ref);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkPageLoading(true);
        checkUser({ id: user.uid, email: user.email });
        setTimeout(() => checkPageLoading(false), 2000);
      } else {
        checkPageLoading(true);
        checkUser({});
        setTimeout(() => checkPageLoading(false), 2000);
      }
    });
  }, []);
  return (
    <main>
      {pageLoading ? <div className="w-100 h-100vh d-flex center column linear-bg">
        <BounceLoader color={'#ffffff'} background={'white'} customLoading={pageLoading} />
      </div> : <>{children}</>}
    </main>
  );
};

const mapStateToProps = (state) => ({
  pageLoading: state.auth.pageLoading,
  toast: state.auth.toast,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: (user) => dispatch(checkUser(user)),
  checkPageLoading: (state) => dispatch(checkPageLoading(state)),
  setToast: (state) => dispatch(setToast(state))
});

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
