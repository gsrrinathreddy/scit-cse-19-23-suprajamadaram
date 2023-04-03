import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutus from './pages/Aboutus';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contactme from './pages/Contactme';
import Workshops from './pages/Workshops';
import Certifications from './pages/Certifications';
import { Card } from '@mui/material';

function App() {
  return (
    <div className="App">
      <INavbar/>
      <Routes>
      <Route path="Aboutus"  element ={<Aboutus/>}/>
      <Route path="Experience"  element ={<Experience/>}/>
      <Route path="Hobbies"  element ={<Hobbies/>}/>
      <Route path="Qualification"  element ={<Qualification/>}/>
      <Route path="Skills" element ={<Skills/>}/>
      <Route path="Projects" element ={<Projects/>}/>
      <Route path="Contactme" element ={<Contactme/>}/>
      <Route path="Workshops" element ={<Workshops/>}/>
      <Route path="Certifications" element ={<Certifications/>}/>
      </Routes>

    </div>
  );
}

export default App;
