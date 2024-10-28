import React from 'react';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Index from './components/Index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Index/>} />
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
