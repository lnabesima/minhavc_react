import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='content'>
        <main></main>
        <Footer />
      </div>
    </>
  );
};

export default App;
