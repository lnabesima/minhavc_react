import React from 'react';

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
        style={{ justifyContent: 'space-between' }}>
        <a
          href={item.path}
          className='nav__links-link'
          onClick={item.subMenu && handleOpenSubMenu}>
          <img
            src={require(`../assets/img/${item.id}.svg`)}
            alt=''
            className='nav__links-icon'
          />
          <span className='nav__links-label'>{item.label}</span>
        </a>
        {item.subMenu && (
          <img
            src={require('../assets/img/more.svg').default}
            alt=''
            className='nav__links-more'></img>
        )}
      </li>
      {subMenu && (
        <ul className='submenu__list flex-column'>
          {item.subMenu.map((item, index) => (
            <li key={index} class='submenu__list-item'>
              <a href={item.path} className='submenu__item flex'>
                <img src='' alt='' className='submenu__item-icon'></img>
                <span className='submenu__item-label'>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuLinks;
