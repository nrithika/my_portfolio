import React from 'react';
import './index.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Projects from './routes/Projects';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    </>
  )
 }

export default App;
