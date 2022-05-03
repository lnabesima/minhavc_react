import React from 'react';
import GoBackButton from '../components/GoBackButton';

import '../assets/scss/Suggestions.scss';
import { StarRating } from '../components/StarRating';
import { TextArea } from '../components/TextArea';
import { ToastNotification } from '../components/ToastNotification';
import { useContainerDimensions } from '../hooks/useContainerDimensions';

const Suggestions = () => {
  const [starRating, setStarRating] = React.useState(0);
  const [starHover, setStarHover] = React.useState(0);
  const [suggestionTextArea, setSuggestionTextArea] = React.useState();


  const componentRef = React.useRef();
  const snackRef = React.useRef();

  const { width } = useContainerDimensions(componentRef);

  const suggestionsTextAreaProps = {
    label: 'Sugestão',
    labelClass: 'suggestions__textArea-label',
    textAreaClass: 'suggestions__textArea-proper',
    id: 'suggestions__textArea',
    value: suggestionTextArea,
    onChange: setSuggestionTextArea,
  };

  const suggestion = {
    rating: starRating,
    text: suggestionTextArea,
  };

  function handleSendSuggestion(event) {
    event.preventDefault();
    if (!!starRating === false && !!suggestionTextArea === false) {
      return;
    } else {
      suggestion.rating = starRating;
      suggestion.text = suggestionTextArea;
      console.log(suggestion);
      console.log(JSON.stringify(suggestion));
    }
    setSuggestionTextArea('');
    setStarRating(0);
    setStarHover(0);

  }

  return (
    <>
      <GoBackButton />
      <div className='suggestions' ref={componentRef}>
        <div className='suggestions__header'>
          <h1 className='suggestions__header-title'>Sugestões</h1>
          <p className='suggestions__header-subtitle'>
            Diga-nos como podemos melhor atender nossos clientes. Deixe aqui sua
            sugestão!
          </p>
        </div>

        <form
          action=''
          className='suggestions__section'
          onSubmit={handleSendSuggestion}>
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

          <ToastNotification
            onSuccess={'Sugestão enviada com sucesso!'}
            width={width}
            ref={snackRef}
          />

          <div className='suggestions__textArea'>
            <TextArea props={suggestionsTextAreaProps} />
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
