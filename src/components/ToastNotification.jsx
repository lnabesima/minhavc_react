import React from 'react';
import '../assets/scss/ToastNotification.scss';

export const ToastNotification = ({
  onSuccess,
  width,
  visibleToast,
  setVisibleToast,
}) => {
  const [matches, setMatches] = React.useState(
    window.matchMedia('(max-width:1024px)').matches
  );

  const toastRef = React.useRef();

  React.useEffect(() => {
    window
      .matchMedia('(max-width: 1024px)')
      .addEventListener('change', event => {
        setMatches(event.matches);
      });
  }, []);

  React.useEffect(() => {
    const toastCurrent = toastRef.current;
    if (visibleToast) {
      toastCurrent.classList.remove('hidden');
      setTimeout(() => toastCurrent.classList.remove('visuallyhidden'), 20);

      setTimeout(() => {
        toastCurrent.classList.add('visuallyhidden');
        toastCurrent.addEventListener(
          'transitionend',
          function () {
            toastCurrent.classList.add('hidden');
          },
          {
            once: true,
          }
        );
      }, 1500);
    }
    setVisibleToast(false);
  }, [visibleToast, setVisibleToast]);

  return (
    <div
      className='toast flex'
      style={matches ? { width: `calc(${width}px - 2rem)` } : { width: width }}>
      <div className='toast__proper hidden visuallyhidden flex' ref={toastRef}>
        <p className='toast__label'>{onSuccess}</p>
      </div>
    </div>
  );
};