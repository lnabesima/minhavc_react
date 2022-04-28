import React from 'react';
import GoBackButton from '../components/GoBackButton';

import '../assets/scss/Suggestions.scss';

const Suggestions = () => {
  return (
    <>
      <GoBackButton />
      <div className='suggestions'>
        <div className='suggestions__header'>
          <h1 className='suggestions__header-title'>Sugestões</h1>
          <p className='suggestions__header-subtitle'>
            Diga-nos como podemos melhor atender nossos clientes. Deixe aqui sua
            sugestão!
          </p>
        </div>

        <form action='' className='suggestions__section'>
          <div className='suggestions__starRating'>
            <p className='suggestions__starRating-label'>
              Deixe-nos uma avaliação!
            </p>
            <div className='suggestions__starRating-proper flex'>
              <img
                src={require('../assets/img/star-full.svg').default}
                alt=''
                className='suggestions__starRating-star'
                id='star-one'
                data-value='one'
              />
              <img
                src={require('../assets/img/star-empty.svg').default}
                alt=''
                className='suggestions__starRating-star'
                id='star-two'
                data-value='two'
              />
              <img
                src={require('../assets/img/star-empty.svg').default}
                alt=''
                className='suggestions__starRating-star'
                id='star-three'
                data-value='three'
              />
              <img
                src={require('../assets/img/star-empty.svg').default}
                alt=''
                className='suggestions__starRating-star'
                id='star-four'
                data-value='four'
              />
              <img
                src={require('../assets/img/star-empty.svg').default}
                alt=''
                className='suggestions__starRating-star'
                id='star-five'
                data-value='five'
              />
            </div>
          </div>

          <div className='suggestions__textArea'>
            <p className='suggestions__textArea-label'>Sugestão</p>
            <textarea className='suggestions__textArea-proper'></textarea>
          </div>
          <button type='submit' className='suggestions__submit grid'>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Suggestions;
