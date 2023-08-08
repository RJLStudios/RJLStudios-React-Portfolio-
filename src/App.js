import React from "react";
import "./App.css";
import CTO from './Components/CTO';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


function App() {
  return (
    <BrowserRouter>
     <div className='App'>
      <Header/>
      <Homepage/>
      <Projects/>
      <Skills/>
      <CTO/>
      <Footer/>
    </div>
    </BrowserRouter> 
  );
}

export default App;
