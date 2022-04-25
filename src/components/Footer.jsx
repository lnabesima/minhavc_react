import React from 'react';
import logo from '../assets/img/logo-vct.svg';

import '../assets/scss/Footer.scss';
import WhatsappButton from './WhatsappButton';

const Footer = () => {
  return (
    <div className='footer__wrapper flex-column'>
      <WhatsappButton />

      <footer className='footer flex'>
        <div className='footer__copyright flex-column'>
          <p className='footer__copyright-text'>Copyright ® 2022. v2.23.4</p>
          <p className='footer__copyright-text'>
            Todos os direitos reservados.
          </p>
        </div>
        <img src={logo} alt='Logo da Você Telecom' className='footer__logo' />
      </footer>
    </div>
  );
};

export default Footer;
