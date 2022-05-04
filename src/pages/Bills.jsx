import React from 'react';
import Button from '../components/Button';

export const Bills = () => {
  return <>Bills</>;
};

export const Actual = () => {
  function handleClick() {
    alert('HEY!!!');
  }

  return (
    <div className='flex-column' style={{ gap: '10px' }}>
      <Button
        label={'Botão'}
        handleClick={handleClick}
        type='commonPrimary'
        width='20vw'
      />
      <Button
        label={'Botão'}
        handleClick={handleClick}
        type='commonSecondary'
        width='500px'
      />
      <Button label={'Botão'} handleClick={handleClick} type='outlinePrimary' />
      <Button
        label={'Botão'}
        handleClick={handleClick}
        type='outlineSecondary'
        width='30rem'
      />
      <Button
        label={'Botão'}
        handleClick={handleClick}
        type='textOnlyPrimary'
      />
      <Button
        label={'Botão'}
        handleClick={handleClick}
        type='textOnlySecondary'
      />
    </div>
  );
};
