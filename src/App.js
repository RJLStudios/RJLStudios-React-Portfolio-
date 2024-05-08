import React, { useRef, useEffect} from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import Skills from "./Components/Skills";


import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import luna from "./Images/ProdLuna.jpeg";
import knew98 from "./Images/KNEW9814.04.jpg";



function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const ctoRef = useRef(null);

  //GRAINED BACKGROUND EFFECT
 
  //

  function scrollToComponent(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behaviour: "smooth" });
    }
  }
  const homeScrollToComponent = () => {
    scrollToComponent(homeRef);
  };

  const projectScrollToComponent = () => {
    scrollToComponent(projectRef);
  };

  const ctoScrollToComponent = () => {
    scrollToComponent(ctoRef);
  };

  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const cvButtonDL = () => {
    const cvUrl =
      process.env.PUBLIC_URL + "/Richard Kelly - CV 04.04.24.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Richard Kelly.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_re14o8d",
        "template_64b3ces",
        form.current,
        "ATtn1deBhV3vWzT70"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App" id='grain'>
   <div className="Homepage" id="Homepage">
    <div className="Homepage-Content">
<svg></svg>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate='visible'
        transition={{ duration: 0.5, delay: 0.2 }}
        className="Navbar "
        ref={homeRef}
      >
        <h3 className="Logo">rjlstudios</h3>

        <div className='Status'>CREATING DIGITAL EXPERIENCES</div>

        <ul className="Header-links">
          <li
            className="Projects-btn hover-underline-animation"
            onClick={projectScrollToComponent}
          >
            PROJECTS
          </li>
          <li
            className="Contact-btn hover-underline-animation"
            onClick={ctoScrollToComponent}
          >
            CONTACT
          </li>
        </ul>

      </motion.div>


  <motion.div
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate='visible'
    transition={{ duration: 0.5, delay: 0.4 }}
    className="Homepage-Content"
  >
    <div className="Homepage-Content-Wrapper">
    <div className='Name'>richard kelly</div>
    <div className='Designer'><span className='Calig'>D</span><span className='Designer-div'>esigner</span><span className='And'>and</span></div>
    <div className='Webflow'>WEBFLOW</div>
    <div className='Web-Dev'>web developer</div>
    </div>

  </motion.div>


<motion.div
  variants={{
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }}
  initial="hidden"
  animate='visible'
  transition={{ duration: 0.5, delay: 0.6 }}
  className="Intro-links"
>
  <div className="Social-Wrapper">
    <a href="https://github.com/RJLStudios" className="Social">
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/richard-kelly-764602156/"
      className="Social"
    >
      <FaLinkedinIn />
    </a>
  </div>

  <a href>
    <button className="Link-A" onClick={cvButtonDL}>
      VIEW RESUME
    </button>
  </a>
</motion.div>
</div>
</div>



      <div className="Projects" ref={projectRef}>
      <div className='Text-Wrapper-Overflow'>
      <motion.div 
         variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.15 }}
      className="Projects-Title">projects</motion.div></div>
        <motion.div
        ref={animateRef}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.35 }}
          className="Projects-Grid Snaps-Inline"
        >

          <div
            className="Grid-Item"
            id="Grid-Item"
            href="https://rjlstudios.github.io/react-beatstore/"
          >
            <div className='Image-Wrapper'>
            <img className="Card-Img"  src={luna} ></img>
            </div>
            <div className="Card-Content">
          
              <div className="Card-Title">Beatstore</div>

              <div className="Sml-Info-Wrapper">
                <ul className="Card-Info">
                  <li className='Info-Tag'>MUSIC</li>
                  <li className='Info-Tag'>E-COMMERCE</li>  
                  <li className='Inverse'>2023</li>
                  </ul>
                <a
                  className="Project-Link"
                  href="https://rjlstudios.github.io/react-beatstore/"
                >
                  <div className="Visit hover-underline-animation"> VISIT</div>
                </a>
              </div>
            </div>
          </div>

          <a
            className="Grid-Item"
            href='https://rjlstudios.github.io/KNEW98/'
          >
               <div className='Image-Wrapper'>
            <img className="Card-Img" src={knew98} loading="lazy"></img>
            </div>
            <div className="Card-Content">
    
              <div className="Card-Title">98' Musician Website</div>
              <div className="Sml-Info-Wrapper">
                <ul className="Card-Info">
                  <li className='Info-Tag'>MUSIC</li>
                  <li className='Info-Tag'>E-COMMERCE</li> 
                  <li className=' Inverse'>2024</li>
                   </ul>

                  <div className="Visit hover-underline-animation">VISIT</div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      <Skills />

      <div className="Border">
        <motion.div 
        className="Border-Fill"
       initial={{scaleX:0}}
        animate={{scaleX:1}}
        transition={{
          duration: 1,
          delay:1,
          ease: 'linear'
        }}></motion.div>
      </div>

      <div className="CTO" ref={ctoRef}>
        <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}
        className="CTO-Wrapper">
          <div className="CTO-bio">
            <h2 className="CTO-Title">Send me a message!</h2>

            <p className="CTO-Para">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </div>

          <div className="Input-field">
            <form ref={form} onSubmit={sendEmail} className="Email-form">
              <div class="form-outline">
                <label class="form-label" for="formControlLg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="formControlLg"
                  class="form-control form-control-lg"
                  name="from_name"
                />
              </div>

              <div class="form-outline">
                <label class="form-label" for="formControlDefault">
                  Email Address
                </label>
                <input
                  type="text"
                  id="formControlDefault"
                  class="form-control"
                />
              </div>

              <div class="form-outline">
                <label class="form-label" for="textArea">
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="formControlSm"
                  class="form-control form-control-sm"
                  rows="4"
                  name="message"
                />
              </div>

              <div className="button-wrapper">
                <input className="button" type="submit" value="SEND" />
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="footer">
        <div className="Footer-Title">RJLStudios</div>
      </div>
    </div>
  );
}

export default App;
