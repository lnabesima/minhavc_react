import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.scss';
import { Outlet } from 'react-router';

const App = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  function handleOpenSidebar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <>
        <Navbar
          openSidebar={openSidebar}
          handleOpenSidebar={handleOpenSidebar}
        />
        <div className='content'>
          <main id='main'>
            <Outlet />
          </main>

          <Footer
            openSidebar={openSidebar}
            handleOpenSidebar={handleOpenSidebar}
          />
        </div>
    </>
  );
};

export default App;
