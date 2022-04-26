import React from 'react';
import GoBackButton from './GoBackButton';

const Suggestions = () => {
  return (
    <div className='suggestions'>
      <GoBackButton />
      <div className='suggestions__header'>
        <h1 className='suggestions__header-title'>Sugestões</h1>
        <p className='suggestions__header-subtitle'>
          Diga-nos como podemos melhor atender nossos clientes. Deixe aqui sua
          sugestão!
        </p>

        <form action=''>
          <div className='suggestions__section'>
            <div className='suggestions__starRating'>
              <p className='suggestions__starRating-label'>
                Deixe-nos uma avaliação!
              </p>
              <div className='suggestions__starRating-proper'>
                <img
                  src={require('../assets/img/star-full.svg').default}
                  alt=''
                />
                <img
                  src={require('../assets/img/star-empty.svg').default}
                  alt=''
                />
                <img
                  src={require('../assets/img/star-empty.svg').default}
                  alt=''
                />
                <img
                  src={require('../assets/img/star-empty.svg').default}
                  alt=''
                />
                <img
                  src={require('../assets/img/star-empty.svg').default}
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='suggestions__textArea'>
            <p className='suggestions__textArea-label'>Sugestão</p>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='suggestions__textArea-proper'></textarea>
          </div>
          <button type='submit' className='suggestions__submit'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Suggestions;
