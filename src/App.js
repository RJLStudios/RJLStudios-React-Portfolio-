import React from "react";
import "./App.css";
import CTO from './Components/CTO';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Homepage/>
      <Projects/>
      <Skills/>
      <CTO/>
      <Footer/>
    </div>
  );
}

export default App;
