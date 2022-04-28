import React from 'react';
import { Link } from 'react-router-dom';

const MenuLinks = ({ item }) => {
  const [subMenu, setSubmenu] = React.useState(false);
  const handleOpenSubMenu = () => {
    setSubmenu(!subMenu);
  };
  return (
    <>
      <li
        key={item.id}
        className='nav__links-item flex'
        onClick={item.subMenu && handleOpenSubMenu}>
        <Link
          to={item.path}
          className='nav__links-link flex'
          onClick={item.subMenu && handleOpenSubMenu}>
          <img
            src={require(`../assets/img/${item.id}.svg`)}
            alt=''
            className='nav__links-icon'
          />
          <span className='nav__links-label'>{item.label}</span>
        </Link>
        {item.subMenu && (
          <img
            src={require('../assets/img/more.svg').default}
            alt=''
            className='nav__links-more'></img>
        )}
      </li>
      {subMenu && (
        <ul className='nav__submenu-list flex-column'>
          {item.subMenu.map(item => (
            <li key={item.id} class='nav__submenu-item'>
              <Link to={item.path} className='nav__submenu-link flex'>
                <img src='' alt='' className='nav__submenu-icon'></img>
                <span className='nav__submenu-label'>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuLinks;
