import React from 'react';
import '../assets/scss/Navbar.scss';

import { NavbarData } from './NavbarData';

import profile from '../assets/img/profile.png';
import MenuLinks from './MenuLinks';
import { useMediaQuery } from 'react-responsive';

const Navbar = ({ openSidebar, handleOpenSidebar }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <nav className={openSidebar ? 'nav active flex-column' : 'nav flex-column'}>
      <div className='nav__wrapper'>
        <div className='nav__logo flex'>
          <img
            src={require('../assets/img/logo.svg').default}
            alt='Logo da Minha Voce'
          />
          <img
            src={require('../assets/img/left-arrow.svg').default}
            alt='Fechar o menu'
            className='nav__logo-icon'
            onClick={handleOpenSidebar}
          />
        </div>

        <div className='nav__separator'></div>

        <div className='nav__profile flex'>
          <img
            src={profile}
            alt='Imagem de Perfil'
            className='nav__profile-picture'
          />
          <div className='nav__profile-options flex-column'>
            <h2 className='nav__profile-name'>Rafael Conde</h2>
            <div className='nav__controls flex'>
              <div className='nav__controls-profile flex'>
                <img
                  src={require('../assets/img/cog.svg').default}
                  alt='Edite seu perfil'
                  className='nav__controls-icon'
                />
                <p className='nav__controls-label'>Perfil</p>
              </div>
              <div className='nav__controls-logout flex'>
                <img
                  src={require('../assets/img/logout.svg').default}
                  alt='Fazer logout'
                  className='nav__controls-icon'
                />
                <p className='nav__controls-label'>Sair</p>
              </div>
            </div>
          </div>
        </div>

        <div className='nav__sidemenu flex-column'>
          <div className='nav__links'>
            {NavbarData.map(link => (
              <MenuLinks
                item={link}
                key={link.id}
                handleOpenSidebar={handleOpenSidebar}
              />
            ))}
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className='nav__mobileFooter'>
          <figure className='nav__mobileFooter-imgWrapper flex'>
            <img
              src={require('../assets/img/logo-vct.svg').default}
              alt='Logo da Você Telecom'
              className='nav__mobileFooter-logo'
            />
          </figure>
          <div className='nav__separator'></div>
          <div className='nav__mobileFooter-copyright flex-column'>
            <p className='nav__mobileFooter-copyrightText'>
              Copyright ® 2022. v2.23.4
            </p>
            <p className='nav__mobileFooter-copyrightText'>
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navbar;
