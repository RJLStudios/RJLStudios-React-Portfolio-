import {React, useRef, useInView, useAnimation, useEffect} from 'react';
import { motion} from "framer-motion";
  import luna from "../Images/ProdLuna.jpeg";
import knew98 from "../Images/KNEW9814.04.jpg";

function Projects() {
    const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
    return(

        <div className="Projects">
        <div className='Text-Wrapper-Overflow'>
        <motion.div 
           variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.15 }}
        className="Projects-Title">PROJECTS.</motion.div></div>
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
  
            <a
              className="Grid-Item"
              href="https://rjlstudios.github.io/react-beatstore/"
            >
              <img className="Card-Img"  src={luna} ></img>
              <div className="Card-Content">
            
                <div className="Card-Title">BEATSTORE</div>
  
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
            </a>
  
            <a
              className="Grid-Item"
              href='https://rjlstudios.github.io/KNEW98/'
            >
              <img className="Card-Img" src={knew98} loading="lazy"></img>
              <div className="Card-Content">
      
                <div className="Card-Title">KNEW 98 WEBSITE</div>
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
  
    )
}

export default Projects;