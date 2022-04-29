import React from 'react';
import starEmpty from '../assets/img/star-empty.svg';

import '../assets/scss/StarRating.scss';

export const StarRating = ({ setRating, setHover, rating, hover }) => {
  return (
    <>
      <div className='starRating'>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type='button'
              key={index}
              className='starRating__button'
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}>
              <img
                src={starEmpty}
                alt=''
                className={
                  index <= (rating || hover)
                    ? 'starRating__button-on'
                    : 'starRating__button-off'
                }
              />
            </button>
          );
        })}
      </div>
    </>
  );
};
