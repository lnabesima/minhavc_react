import React from 'react';
import '../assets/scss/ToastNotification.scss';

// export const ToastNotification = forwardRef({ onSuccess, width, snackRef }, ref) => {
//   const [matches, setMatches] = React.useState(
//     window.matchMedia('(max-width:1024px)').matches
//   );

//   React.useEffect(() => {
//     window
//       .matchMedia('(max-width: 1024px)')
//       .addEventListener('change', event => {
//         setMatches(event.matches);
//       });
//   }, []);

//   return (
//     <div
//       className='toast flex'
//       style={matches ? { width: `calc(${width}px - 2rem)` } : { width: width }}>
//       <div className='toast__proper flex' ref={snackRef}>
//         <p className='toast__label'>{onSuccess}</p>
//       </div>
//       <button
//         onClick={() => {
//           snackRef.classList.add('test');
//         }}>
//         button
//       </button>
//     </div>
//   );
// };

export const ToastNotification = React.forwardRef(({onSuccess, width}, ref) => {
  const [matches, setMatches] = React.useState(
        window.matchMedia('(max-width:1024px)').matches
      );
    
      React.useEffect(() => {
        window
          .matchMedia('(max-width: 1024px)')
          .addEventListener('change', event => {
            setMatches(event.matches);
          });
      }, []);
    
      return (
        <div
          className='toast flex'
          style={matches ? { width: `calc(${width}px - 2rem)` } : { width: width }}>
          <div className='toast__proper flex' ref={ref}>
            <p className='toast__label'>{onSuccess}</p>
          </div>
        </div>
      );


})