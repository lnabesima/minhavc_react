import React from 'react';

import '../assets/scss/WhatsappButton.scss';
import whatsappLogo from '../assets/img/whatsapp.svg';

const WhatsappButton = () => {
  return (
    <a
      href='https://wa.me/559633333333?text=Minha%20Voc%C3%AA,%20preciso%20abrir%20uma%20solicita%C3%A7%C3%A3o'
      target='_blank'
      rel='noreferrer'
      className='whatsappButton flex'>
      <span className='whatsappButton__label'>Precisa de ajuda?</span>
      <img
        src={whatsappLogo}
        alt='Logo do Whatsapp'
        className='whatsappButton_icon'
      />
    </a>
  );
};

export default WhatsappButton;
