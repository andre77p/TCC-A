import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App';
import Home from './pages/home';
import Cadastro from './pages/cadastro';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes><Route path='/app' element={<App />} />

      <Route path='/login' element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
