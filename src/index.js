import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import "@fontsource/roboto";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/user/:id' element={<Home />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={ <Navigate to ="/user/12"/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
