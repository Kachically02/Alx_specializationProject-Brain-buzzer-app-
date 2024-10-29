import React from 'react';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Index from './components/Index';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Index/>} />
    <Route path='/login' exact element={<Login/>}/>
    <Route path='/signup' exact element={<Signup/>}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
