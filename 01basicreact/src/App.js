import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Sidenavbar from './Sidenavbar';
import Formsing from './Formsing';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Sidenavbar />} />
        <Route  path="/Login" element={<Login />} />
        <Route  path="/Formsing" element={<Formsing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


