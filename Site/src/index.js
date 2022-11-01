import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Nike from './pages/nike';
import Adidas from './pages/adidas';
import Puma from './pages/puma';
import Rebook from './pages/rebook';
import Newbalance from './pages/newbalance';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/login' element={<Login />} />
      <Route path='/nike' element={< Nike />} />
      <Route path='/adidas' element={< Adidas />} />
      <Route path='/puma' element={<  Puma />} />
      <Route path='/rebook' element={< Rebook />} />
      <Route path='/newbalnce' element={< Newbalance />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
