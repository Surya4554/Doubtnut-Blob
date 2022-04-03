import React from 'react';
import Home from './Home';
import { Route, Routes } from "react-router";
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Service from './Pages/Service.js';

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
    </Routes>
    </>
  );
};

export default App;