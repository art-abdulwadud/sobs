import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

const UsersList = () => {
  const menu1 = useRef();
  const items = [
    { label: 'Refers', icon: 'pi pi-fw pi-refresh' }
  ];
  return (

    <div className="surface-card shadow-2 border-round p-4">
      <div className="flex justify-content-between align-items-center mb-5">
        <span className="text-xl text-900 font-medium">Users List</span>
        <div>
          <Button icon="pi pi-ellipsis-v" className="p-button-text p-button-plain p-button-rounded" onClick={(event) => menu1.current.toggle(event)} />
          <Menu ref={menu1} popup model={items} />
        </div>
      </div>
      <ul className="list-none p-0 m-0">
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div className="flex">
            <div className="mr-0 md:mr-8">
              <span className="block text-900 font-medium mb-1">Janette Hudson</span>
              <div className="text-600">UI/UX Designer</div>
            </div>
          </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div className="flex">
            <div className="mr-0 md:mr-8">
              <span className="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
              <div className="text-600">UI/UX Designer</div>
            </div>
          </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div className="flex">
            <div className="mr-0 md:mr-8">
              <span className="block text-900 font-medium mb-1">Arlene McCoy</span>
              <div className="text-600">UI/UX Designer</div>
            </div>
          </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div className="flex">
            <div className="mr-0 md:mr-8">
              <span className="block text-900 font-medium mb-1">Jacob Jones</span>
              <div className="text-600">UI/UX Designer</div>
            </div>
          </div>
        </li>
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div className="flex">
            <div className="mr-0 md:mr-8">
              <span className="block text-900 font-medium mb-1">James Cooper</span>
              <div className="text-600">UI/UX Designer</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  );
};

export default UsersList;
