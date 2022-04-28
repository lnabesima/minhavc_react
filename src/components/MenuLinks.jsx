import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLinks = ({ item }) => {
  const [subMenu, setSubmenu] = React.useState(false);
  const handleOpenSubmenu = () => {
    setSubmenu(!subMenu);
  };
  return (
    <>
      <NavLink
        key={item.id}
        to={item.path}
        className='nav__links-item flex'
        onClick={item.subMenu && handleOpenSubmenu}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? '#FD670012' : '',
          };
        }}>
        <div className='nav__links-wrapper flex'>
          <img
            src={require(`../assets/img/${item.id}.svg`)}
            alt=''
            className='nav__links-icon'
          />
          <span className='nav__links-label'>{item.label}</span>
        </div>
        {item.subMenu && (
          <img
            src={require('../assets/img/more.svg').default}
            alt=''
            className='nav__links-more'></img>
        )}
      </NavLink>
      {subMenu && (
        <div className='nav__submenu-list flex-column'>
          {item.subMenu.map(item => (
            <NavLink
              to={item.path}
              key={item.id}
              className='nav__submenu-item flex'
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? '#5550B21A                  '
                    : '',
                };
              }}>
              <img src='' alt='' className='nav__submenu-icon'></img>
              <span className='nav__submenu-label'>{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuLinks;
