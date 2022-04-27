import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Suggestions from './components/Suggestions';
import './App.scss';

const App = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  function handleOpenSidebar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <>
      <Navbar openSidebar={openSidebar} handleOpenSidebar={handleOpenSidebar}/>
      <div className='content'>
        <main>
          <Suggestions />
        </main>

        <Footer openSidebar={openSidebar} handleOpenSidebar={handleOpenSidebar}/>
      </div>
    </>
  );
};

export default App;
