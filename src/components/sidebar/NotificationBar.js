import React, { useRef } from 'react';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { Badge } from 'primereact/badge';
import { connect } from 'react-redux';
import { checkPageLoading } from '../../state/auth/auth.actions';

const isBrowser = typeof window !== 'undefined';

const NotificationBar = ({ unreadNotifications }) => {
  const optionsBtn = useRef(null);
  const toggleBtn = useRef(null);
  return (
    <div className="flex justify-content-between align-items-center px-5 bg-blue-200 shadow-2 relative lg:static surface-border" style={{ height: '60px' }}>
      <div className="flex">
        <StyleClass nodeRef={toggleBtn} selector="#app-sidebar" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
          <a ref={toggleBtn} className="p-ripple cursor-pointer block lg:hidden text-gray-900 mr-3">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
          </a>
        </StyleClass>
      </div>
      <StyleClass nodeRef={optionsBtn} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
        <a ref={optionsBtn} className="p-ripple cursor-pointer block lg:hidden text-gray-900">
          <i className="pi pi-ellipsis-v text-2xl"></i>
          <Ripple />
        </a>
      </StyleClass>
      <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
    white-bg-sm border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static" style={{ background: 'transparent' }}>
        <li>
          <a className={`p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-indigo-50 ${isBrowser && window.location.pathname.includes('notifications') ? 'text-indigo-50 linear-bg' : ''} faded-linear-bg font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full`}>
            <i className="pi pi-bell text-gray-900 hover:text-300 lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">{unreadNotifications && unreadNotifications > 0 ? <Badge severity="danger" /> : null }</i>
            <span className="block lg:hidden font-medium">Notifications</span>
            <Ripple />
          </a>
        </li>
        {/* <li onClick={() => {
          checkPageLoading(true);
          navigate('/checkout');
        }}>
          <a className={`p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-indigo-50 ${isBrowser && window.location.pathname.includes('checkout') ? 'text-indigo-50 linear-bg' : ''} faded-linear-bg font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full`}>
            <i className="pi pi-shopping-cart text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">{checkoutProducts.length > 0 ? <Badge severity="danger" /> : null }</i>
            <span className="block lg:hidden font-medium">Checkout</span>
            <Ripple />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  checkoutProducts: state.checkout.checkoutProducts
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (state) => dispatch(checkPageLoading(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBar);
