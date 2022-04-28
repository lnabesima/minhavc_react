import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Suggestions from './pages/Suggestions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
          <Route path='suggestions' element={<Suggestions />} />
          <Route
            path='*'
            element={
              <div className='errorContainer'>
                <h1 className='errorContainer__title'>Erro 404</h1>
                <p className='errorContainer__text'>
                  Não há nada por aqui... ainda.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
