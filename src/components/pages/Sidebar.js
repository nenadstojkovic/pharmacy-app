import React from 'react';
import { Link } from 'react-router-dom';
import { SIDEBAR_ITEMS } from '../sidebar/SidebarItems';

import '../sidebar/Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SIDEBAR_ITEMS.map((item, index) => {
            return (
              <li key={index} className='nav-text'>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
