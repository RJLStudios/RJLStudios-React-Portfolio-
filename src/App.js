import React, { useRef } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
/*import CTO from './Components/CTO';*/
import Skills from "./Components/Skills";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "animate.css";
import Knew98 from "./Images/Knew 98 draft.png";
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
} from "framer-motion";
import luna from "./Images/ProdLuna.png";
import knew98 from "./Images/KNEW 98 (2).png";
import { useEffect } from "react";

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const ctoRef = useRef(null);

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
      process.env.PUBLIC_URL + "/Richard Kelly - CV 22.02.24 (1).pdf"; // Assuming your CV file is named 'your_cv_file.pdf' and placed in the public folder
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
    <div className="App">
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
        <h3 className="Logo">RJLStudios</h3>

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

        <div className="Header-progress">
          <div className="Progress-circle"></div>
        </div>
      </motion.div>

      <div className="Homepage" id="Homepage">
        <div className="Intro-text ">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate='visible'
            transition={{ duration: 0.5, delay: 0.4 }}
            className="Text-Wrapper
"
          >
            <p className="Intro-P Opaque ">RICHARD KELLY</p>

            <div className=" Intro-H1">Front-End</div>

            <h1 className="Intro-H1">Web Developer</h1>

            <p className="Intro-P">
              Combining passions to create beautiful and engaging digital
              experiences in London, United Kingdom.
            </p>
          </motion.div>
        </div>
        
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
              View Resume
            </button>
          </a>
        </motion.div>
      </div>

      <div className="Projects" ref={projectRef}>
        <motion.div
        ref={animateRef}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.5 }}
          className="Projects-Grid Snaps-Inline"
        >
          <div

            className="Grid-Item"
          >
            <img className="Card-Img" src={luna}></img>
            <div className="Card-Content">
              <div className="Sub-Title">
                <p className="Sub-Title-Cat">REACT</p>
              </div>
              <div className="Card-Title">Beatstore</div>

              <div className="Card-Info">
                An e-commerce music production marketplace
              </div>
              <div className="Sml-Info-Wrapper">
                <div className="Card-Info Sml">MUSIC, E-COMMERCE </div>
                <a
                  className="Project-Link"
                  href="https://rjlstudios.github.io/react-beatstore/"
                >
                  <div className="Visit"> VISIT</div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="Grid-Item"
          >
            <img className="Card-Img" src={knew98}></img>
            <div className="Card-Content">
              <div className="Sub-Title">
                <p className="Sub-Title-Cat">HTML CSS JAVASCRIPT</p>
              </div>
              <div className="Card-Title">Knew 98' Website</div>

              <div className="Card-Info">
                Knew 98's artist website showcasing current work
              </div>
              <div className="Sml-Info-Wrapper">
                <div className="Card-Info Sml">MUSIC </div>
                <div className="Visit"> COMING SOON</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Skills />

      <div className="Border"></div>

      <div className="CTO" ref={ctoRef}>
        <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.5 }}
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
