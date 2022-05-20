import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import firebase from 'gatsby-plugin-firebase';
import { css } from '@emotion/react';
import './layout.css';
import './fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { connect } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { checkPageLoading, checkUser, setToast } from '../state/auth/auth.actions';
import logo from '../images/preloader.png';

const Layout = ({ children, pageLoading, checkPageLoading, checkUser, setToast }) => {
  const ref = useRef();
  useEffect(() => {
    setToast(ref);
    checkPageLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkUser({ id: user.uid, email: user.email, displayName: user.displayName });
        setTimeout(() => checkPageLoading(false), 2000);
      } else {
        checkUser({});
        setTimeout(() => checkPageLoading(false), 2000);
      }
    });
  }, []);
  const override = css`
    margin-bottom: -8rem;
  `;
  return (
    <main>
      {pageLoading ? <div className="w-100 h-100vh d-flex center column bg-blue-200">
        <BounceLoader color={'#ffffff'} background={'white'} customLoading={pageLoading} css={override} size={150} />
        <img src={logo} alt="Logo" className="logo" style={{ height: '20vh', zIndex: '1' }} />
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
