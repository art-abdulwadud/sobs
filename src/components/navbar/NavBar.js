import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Badge } from 'primereact/badge';

const NavBar = () => {
  const btnRef13 = useRef();
  const btnRef14 = useRef();
  return (
    <div className="surface-overlay relative">
      <div className="py-3 lg:py-2 px-6 flex align-items-center justify-content-between lg:static">
        <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
        <div className="flex align-items-center">
          <StyleClass nodeRef={btnRef13} selector="#navbar-sub-7" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef13} className="p-ripple cursor-pointer block lg:hidden text-700 mr-5" >
              <i className="pi pi-ellipsis-v text-2xl"></i>
              <Ripple />
            </a>
          </StyleClass>
          <StyleClass nodeRef={btnRef14} selector="#navbar-7" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef14} className="p-ripple cursor-pointer block lg:hidden text-700" >
              <i className="pi pi-bars text-4xl"></i>
              <Ripple />
            </a>
          </StyleClass>
        </div>
        <div id="navbar-sub-7" className="hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span className="block lg:hidden font-medium">Inbox</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                <span className="block lg:hidden font-medium">Notifications</span>
                <Ripple />
              </a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none">
              <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '28px', height: '28px' }} />
                <div className="block lg:hidden">
                  <div className="text-900 font-medium">Josephine Lillard</div>
                  <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                </div>
                <Ripple />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="navbar-7" className="py-2 px-6 shadow-2 hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 shadow-2">
        <ul className="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
          <li>
            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
              <i className="pi pi-home mr-2"></i>
              <span>Home</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
              <i className="pi pi-calendar mr-2"></i>
              <span>Calendar</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
              <i className="pi pi-chart-line mr-2"></i>
              <span>Stats</span>
              <Ripple />
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default NavBar;
