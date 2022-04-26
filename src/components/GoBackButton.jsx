import React from 'react';
import '../assets/scss/GoBack.scss';

const GoBackButton = () => {
  return (
    <button className='goBack flex' onClick={() => window.history.back()}>
      <figure className='goBack__icon grid'>
        <img
          src={require('../assets/img/left-arrow.svg').default}
          alt='Voltar'
          className='goBack__icon-proper'
        />
      </figure>
      <p className='goBack__label'>Voltar</p>
    </button>
  );
};

export default GoBackButton;
