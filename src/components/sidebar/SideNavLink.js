import React from 'react';
import { Ripple } from 'primereact/ripple';
import { connect } from 'react-redux';
import { checkPageLoading, logout } from '../../state/auth/auth.actions';

const isBrowser = typeof window !== 'undefined';

const SideNavLink = ({
  linkText,
  link,
  icon,
  setTab,
  tab
}) => {
  const handleClick = (ev) => {
    try {
      ev.preventDefault();
      setTab(tab);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <li onClick={handleClick}>
      <a
        className={`flex align-items-center cursor-pointer p-3 ${
          isBrowser && window.location.pathname.includes(link) && link !== ''
            ? 'text-gray-900 hover:text-gray-800 faded-white'
            : isBrowser && window.location.pathname === '/' && link === ''
              ? 'text-gray-800 hover:text-gray-900 faded-white'
              : 'text-indigo-900 hover:text-indigo-800'
        } faded-white-h border-round transition-colors transition-duration-150`}
      >
        <i className={`pi ${icon} mr-2`}></i>
        <span className="font-medium">{linkText}</span>
        <Ripple />
      </a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  toast: state.auth.toast
});

const mapDispatchToProps = (dispatch) => ({
  logout: (toast) => dispatch(logout(toast)),
  checkPageLoading: (state) => dispatch(checkPageLoading(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavLink);
