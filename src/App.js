import React, {useRef} from "react";
import "./App.css";
import emailjs from '@emailjs/browser'
/*import CTO from './Components/CTO';*/
import Skills from './Components/Skills';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import CV from './Images/Richard Kelly - CV 22.02.24 (1).pdf';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import 'animate.css';
import Knew98 from './Images/Knew 98 draft.png';
import { motion, useTransform, useScroll} from 'framer-motion';


function App() {
  
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const ctoRef = useRef(null);


  function scrollToComponent(ref) {
    if (ref.current) {
      ref.current.scrollIntoView ({ behaviour: 'smooth'})
    }
  }
  const homeScrollToComponent = () => {
    scrollToComponent(homeRef);
  }

  const projectScrollToComponent = () => {
    scrollToComponent(projectRef);
  }

const ctoScrollToComponent = () => {
    scrollToComponent(ctoRef);
  }

  const cvButtonDL = () => {
    const link = document.createElement('a')
    link.href = './Images/Richard Kelly - CV 22.02.24 (1).pdf';
    link.download = './Images/Richard Kelly - CV 22.02.24 (1).pdf';
    link.click();
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_re14o8d', 'template_64b3ces', form.current, 'ATtn1deBhV3vWzT70')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
     <div className='App'>
        <div className='Navbar ' ref={homeRef}>
       <h3 className='Logo animate__animated animate__fadeInLeft'>RJLStudios</h3>

         <ul className='Header-links animate__animated animate__fadeInLeft'>
            <li className='Home-btn' onClick={homeScrollToComponent}>HOME</li>
            <li className='Projects-btn' onClick={projectScrollToComponent}>PROJECTS</li>
            <li className='contact-btn' onClick={ctoScrollToComponent}>CONTACT</li>
         </ul>

         <div className='Header-progress'>
          <div className='Progress-circle'></div>
         </div>
         
        </div>

        <div  className="Homepage" id="Homepage">
      <div className="Home-Bio">
        <div className="Intro-text ">

        <p className="Intro-P Opaque FadeUp Delay1">
            RICHARD KELLY
          </p>

          <div className="FadeUp1 Delay1 Italic">
          Front-End  
          </div>

          <h1 className="Intro-H1 FadeUp1 Delay2">
          Web Developer 
          </h1>
      
          <p className="Intro-P FadeUp2 Delay2">
           Combining passions to create beautiful and engaging digital experiences in London, United Kingdom.
          </p>

          
        </div>
        <div className="Intro-links">
        <div className='Social-Wrapper'>
            <a href='https://github.com/RJLStudios' className='Social animate__animated animate__fadeInRight'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/richard-kelly-764602156/' className='Social animate__animated animate__fadeInRight'><FaLinkedinIn /></a>
            </div>

            <a src='src\Images\Richard Kelly - CV 22.02.24 (1).pdf' download=''><button className="Link-A animate__animated animate__fadeInRight" onClick={cvButtonDL}>View Resume</button></a>

          </div>
      </div>

      
    </div>
      <div className='Projects' ref={projectRef}>
          <motion.section 
          variants={{hidden: {opacity:0}, 
          show:{
            opacity:1,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        initial='hidden'
        animate='show'
           className='Projects-Grid Snaps-Inline'>
            <motion.div 
            variants={{hidden: {opacity:0}, show: {opacity:1}}}
            className='Grid-Item'>
            <div className="Card-Img BeatStore"  ></div>     
                   <div className='Card-Content'>
                    <div className='Sub-Title'>
                      <p className='Sub-Title-Cat'>REACT</p>
                    </div>
                    <div className='Card-Title'>Beatstore</div>
                    
                    <div className='Card-Info'>An e-commerce music production marketplace that allows clients to license and purchase my beats.</div>
                    <div className='Sml-Info-Wrapper'>
                      <div className='Card-Info Sml'>MUSIC, E-COMMERCE </div>
                      <a className='Project-Link' href='https://rjlstudios.github.io/react-beatstore/'><div className='Visit'> VISIT</div></a>
                      </div>
                   </div>
               </motion.div>

               <motion.div 
            variants={{hidden: {opacity:0}, show: {opacity:1}}}
            className='Grid-Item'>
            <div className="Card-Img Knew98"  ></div>     
                   <div className='Card-Content'>
                    <div className='Sub-Title'>
                      <p className='Sub-Title-Cat'>HTML   CSS   JAVASCRIPT</p>
                    </div>
                    <div className='Card-Title'>Knew 98' Website</div>

                    <div className='Card-Info'>Knew 98's artist website showcasing current work and booking features</div>
                    <div className='Sml-Info-Wrapper'>
                      <div className='Card-Info Sml'>MUSIC </div>
                      <div className='Visit'> COMING SOON</div>
                      </div>
                   </div>
                   </motion.div>
              

                   <motion.div 
            variants={{hidden: {opacity:0}, show: {opacity:1}}}
            className='Grid-Item'>
            <div className="Card-Img Spotify"  ></div>     
                   <div className='Card-Content'>
                    <div className='Sub-Title'>
                      <p className='Sub-Title-Cat'>REACT</p>
                    </div>
                    <div className='Card-Title'>Spotify Clone</div>

                    <div className='Card-Info'>A music player application curated with my own playlists. Utilizes the Spotify API to fetch data.</div>
                    <div className='Sml-Info-Wrapper'>
                      <div className='Card-Info Sml'>MUSIC, FULLSTACK</div>
                      <div className='Visit'> COMING SOON</div>
                      </div>
                   </div>
               </motion.div>
            </motion.section>
            

        </div>

      <Skills/>

<div className='Border'></div>
     
      <div className="CTO" ref={ctoRef}>
      <div className="CTO-Wrapper">
        <div className="CTO-bio">
          <h2 className="CTO-Title">Send me a message!</h2>

          <p className="CTO-Para">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>

        <div className="Input-field">
          <form 
            ref={form}
            onSubmit={sendEmail}
            className="Email-form"
           
          >
            <div class="form-outline">
            <label class="form-label" for="formControlLg">
                Your Name
              </label>
              <input
                type="text"
                id="formControlLg"
                class="form-control form-control-lg"
                name='from_name'
              />
             
            </div>

            <div class="form-outline">
            <label class="form-label" for="formControlDefault">
                Email Address
              </label>
              <input type="text" id="formControlDefault" class="form-control" />
             
            </div>

            <div class="form-outline">
            <label class="form-label" for="textArea">
                Your Message
              </label>
              <textarea
                type="text"
                id="formControlSm"
                class="form-control form-control-sm"
                rows='4'
                name='message'
              />
            
            </div>

            <div className="button-wrapper">
              <input className="button" type="submit" value="SEND"/>
              
            </div>
          </form>
        </div>
      </div>
    </div>

   

      <div className='footer'>
            <div className='Footer-Title'>RJLStudios</div>
        </div>
    </div>
  );
}

export default App;
