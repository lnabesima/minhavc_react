import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Suggestions from './components/Suggestions'
import './App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='content'>
        <main>
          <Suggestions />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
