import React from 'react';
import logo from '../assets/img/logo-vct.svg';

import '../assets/scss/Footer.scss';
import WhatsappButton from './WhatsappButton';

/*
$breakpoints: (
  'mobile': 1024px,
  'laptop': 1440px,
);
*/

const Footer = () => {
  return (
    <div className='footer__wrapper flex-column'>
      <WhatsappButton />

      <footer className='footer__desktop'>
        <div className='footer__desktop-wrapper flex'>
          <div className='footer__copyright flex-column'>
            <p className='footer__copyright-text'>Copyright ® 2022. v2.23.4</p>
            <p className='footer__copyright-text'>
              Todos os direitos reservados.
            </p>
          </div>
          <img src={logo} alt='Logo da Você Telecom' className='footer__logo' />
        </div>
      </footer>

      <footer className='footer__mobile'>
        <div className='footer__mobile-wrapper flex'>
          <div className='footer__mobile-container flex-column'>
            <img
              src={require('../assets/img/options.svg').default}
              alt=''
              className='footer__mobile-icon'
            />
            <p className='footer__mobile-label'>Opções</p>
          </div>
          <div className='footer__mobile-container flex-column'>
            <img
              src={require('../assets/img/plans.svg').default}
              alt=''
              className='footer__mobile-icon'
            />
            <p className='footer__mobile-label'>Planos</p>
          </div>
          <div className='footer__mobile-container flex-column'>
            <img
              src={require('../assets/img/home.svg').default}
              alt=''
              className='footer__mobile-icon'
            />
            <p className='footer__mobile-label'>Home</p>
          </div>
          <div className='footer__mobile-container flex-column'>
            <img
              src={require('../assets/img/bills.svg').default}
              alt=''
              className='footer__mobile-icon'
            />
            <p className='footer__mobile-label'>Faturas</p>
          </div>
          <div className='footer__mobile-container flex-column'>
            <img
              src={require('../assets/img/profile.png')}
              alt=''
              className='footer__mobile-icon'
            />
            <p className='footer__mobile-label'>Perfil</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
