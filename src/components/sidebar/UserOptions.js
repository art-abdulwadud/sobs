import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { FiUser } from 'react-icons/fi';
import { connect } from 'react-redux';
import { navigate } from 'gatsby-link';
import { checkPageLoading, logout } from '../../state/auth/auth.actions';

const UserOptions = ({ user, logout, toast, checkPageLoading }) => {
  const logOutBtn = useRef(null);
  return (
    <div className="p-2 mt-auto surface-border">
      <ul className="list-none p-2 m-0 hidden">
        <li onClick={() => {
          checkPageLoading(true);
          navigate('/settings');
        }}>
          <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 faded-white-h border-round transition-colors transition-duration-150 w-full">
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Settings</span>
            <Ripple />
          </a>
        </li>
        <li onClick={() => {
          checkPageLoading(true);
          logout(toast);
        }}>
          <a className="p-ripple flex align-items-center cursor-pointer p-3 text-indigo-100 hover:text-indigo-50 faded-white-h border-round transition-colors transition-duration-150 w-full">
            <i className="pi pi-sign-out mr-2"></i>
            <span className="font-medium">Sign Out</span>
            <Ripple />
          </a>
        </li>
      </ul>
      <StyleClass nodeRef={logOutBtn} selector="@prev" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout">
        <a ref={logOutBtn} className="p-ripple p-3 flex align-items-center cursor-pointer text-indigo-100 hover:text-indigo-50 faded-white-h border-round transition-colors transition-duration-150 w-full">
          <FiUser className="text-xl mb-1 me-2" />
          <span className="font-medium capitalize">{user && user.displayName ? user.displayName : null}</span>
          <i className="pi pi-chevron-up ml-auto"></i>
          <Ripple />
        </a>
      </StyleClass>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  toast: state.auth.toast
});

const mapDispatchToProps = (dispatch) => ({
  logout: (toast) => dispatch(logout(toast)),
  checkPageLoading: (state) => dispatch(checkPageLoading(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOptions);
