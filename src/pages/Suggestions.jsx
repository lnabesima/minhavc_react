import React from 'react';
import GoBackButton from '../components/GoBackButton';

import '../assets/scss/Suggestions.scss';
import { StarRating } from '../components/StarRating';

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
              <StarRating />
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
