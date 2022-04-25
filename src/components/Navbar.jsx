import React from 'react';
import '../assets/scss/Navbar.scss';

import { NavbarData } from './NavbarData';

import profile from '../assets/img/profile.png';
import MenuLinks from './MenuLinks';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__logo flex'>
        <img
          src={require('../assets/img/logo.svg').default}
          alt='Logo da Minha Voce'
        />
        <img
          src={require('../assets/img/left-arrow.svg').default}
          alt='Voltar'
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
        <ul className='nav__links'>
          {NavbarData.map(link => (
            <MenuLinks item={link} key={link.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
