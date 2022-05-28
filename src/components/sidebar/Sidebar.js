import { navigate } from 'gatsby-link';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { checkPageLoading } from '../../state/auth/auth.actions';
import NotificationBar from './NotificationBar';
import SideNavLink from './SideNavLink';
import logo from '../../images/logo.png';

const SideBar = ({ children, checkPageLoading }) => {
  const [tab, setTab] = useState('Administration');
  return (
    <div className="min-h-screen flex relative lg:static bg-white">
      <div id="app-sidebar" className="bg-blue-200 h-full lg:h-auto hidden linear-bg lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 surface-border select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full bg-blue-200">
          <div className="p-1 flex align-items-center justify-content-center">
            <a className="navbar-brand logo-font" style={{ color: '#7c8af1' }} href="/" onClick={(ev) => {
              ev.preventDefault();
              checkPageLoading(true);
              navigate('/');
            }}><img src={logo} alt="logo" height="80" width="150" /></a>
          </div>
          <div className="overflow-y-auto mt-1">
            <ul className="list-none p-2 m-0">
              <SideNavLink icon="pi-table" linkText="Administration" setTab={setTab} tab="Administration" currentTab={tab} />
              {/* <li>
                <div className="p-3 text-500 font-medium text-gray-900">QUICK LINKS</div>
              </li>
              <SideNavLink icon="pi-file" linkText="Invoices" link="invoices" />
              <SideNavLink icon="pi-file" linkText="Delivery Note" link="delivery-note" /> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-column relative flex-auto">
        <NotificationBar />
        <div className="flex flex-column flex-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  checkPageLoading: (state) => dispatch(checkPageLoading(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
