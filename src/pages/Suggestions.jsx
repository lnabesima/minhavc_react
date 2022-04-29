import React from 'react';
import GoBackButton from '../components/GoBackButton';

import '../assets/scss/Suggestions.scss';
import { StarRating } from '../components/StarRating';
import { TextArea } from '../components/TextArea';

const Suggestions = () => {
  const [starRating, setStarRating] = React.useState(0);
  const [starHover, setStarHover] = React.useState(0);
  const [suggestionTextArea, setSuggestionTextArea] = React.useState();

  const suggestionsTextAreaProps = {
    label: 'Sugestão',
    labelClass: 'suggestions__textArea-label',
    textAreaClass: 'suggestions__textArea-proper',
    id: 'suggestions__textArea',
    value: suggestionTextArea,
    onChange: setSuggestionTextArea,
  };

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
              <StarRating
                rating={starRating}
                setRating={setStarRating}
                hover={starHover}
                setHover={setStarHover}
              />
            </div>
          </div>

          <div className='suggestions__textArea'>
            <TextArea props={suggestionsTextAreaProps} />
            {/* <label
              className='suggestions__textArea-label'
              for='suggestions__textArea'>
              Sugestão
            </label>
            <textarea
              className='suggestions__textArea-proper'
              id='suggestions__textArea'></textarea> */}
            <p>{suggestionTextArea}</p>
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
