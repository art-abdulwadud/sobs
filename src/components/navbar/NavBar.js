/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Badge } from 'primereact/badge';
import { connect } from 'react-redux';
import { navigate } from 'gatsby-link';
import logo from '../../images/logo.jpeg';
import { logout } from '../../state/auth/auth.actions';

const NavBar = ({ user, cart, logout }) => {
  const btnRef1 = useRef();
  const btnRef26 = useRef();
  return (
    <div className="surface-overlay py-1 px-2 shadow-2 flex align-items-center justify-content-between relative lg:static w-100" style={{ minHeight: '80px' }}>
      <img src={logo} alt="bastion-700" height={40} className="mr-0 lg:mr-6 cursor" onClick={() => navigate('/')} />
      <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef1} className="cursor-pointer block lg:hidden text-700">
          <i className="pi pi-bars text-4xl"></i>
          <Ripple />
        </a>
      </StyleClass>
      <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
          {/* <li onClick={() => navigate('/')}>
            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
              <i className="pi pi-home mr-2"></i>
              <span>Home</span>
              <Ripple />
            </a>
          </li>*/}
        </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
          <li onClick={() => navigate('/checkout')}>
            <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
              <i className="pi pi-shopping-cart text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">{cart && cart.length > 0 ? <Badge severity="danger" /> : null}</i>
              <span className="block lg:hidden font-medium">Cart</span>
              <Ripple />
            </a>
          </li>
          {user && user.id ? null : <>
            <li onClick={() => navigate('/login')}>
              <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">

                <span>Login</span>
                <Ripple />
              </a>
            </li>
            <li onClick={() => navigate('/signup')}>
              <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">

                <span>Sign Up</span>
                <Ripple />
              </a>
            </li>
          </>}
          {/* <li>
            <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
              <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
              <span className="block lg:hidden font-medium">Notifications</span>
              <Ripple />
            </a>
          </li> */}
          {user && user.id ? <li className="h-full relative">
            <StyleClass nodeRef={btnRef26} selector="#profile-10" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
              <div ref={btnRef26} className="cursor-pointer flex p-3 align-items-center text-600 hover:text-900 transition-colors transition-duration-150 relative select-none">
                <div className="hidden lg:block">
                  <span className="block mb-1 text-lg font-medium white-space-nowrap capitalize">{user && user.displayName ? user.displayName === null ? user.email.match(/^([^@]*)@/)[1] : user.displayName : user.email ? user.email.match(/^([^@]*)@/)[1] : null}</span>
                </div>
                <i className="pi pi-chevron-down ml-3 hidden lg:block"></i>
                <div id="profile-10" className="hidden absolute left-0 top-100 shadow-2 surface-50 border-round-bottom w-15rem lg:w-full origin-top">
                  <ul className="list-none m-0 p-1">
                    <li>
                      <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-200 transition-colors transition-duration-150 border-round"
                      onClick={(ev) => {
                        ev.preventDefault();
                        navigate('/dashboard');
                      }}>
                        <i className="pi pi-user mr-2"></i>
                        <span className="font-medium">Dashboard</span>
                        <Ripple />
                      </a>
                    </li>
                    <li onClick={() => logout()}>
                      <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-200 transition-colors transition-duration-150 border-round">
                        <i className="pi pi-sign-out mr-2"></i>
                        <span className="font-medium">Sign Out</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </StyleClass>
          </li> : null}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.checkout.cart
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
