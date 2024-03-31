import React, { useEffect, useRef } from 'react';
import luna from "../Images/IMG_2610.jpg";
import {motion} from 'framer-motion';
import {
    useInView,
    useAnimation,
    useScroll,
    useTransform
  } from "framer-motion";

function About(){

  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });
  const mainControls = useAnimation();

  const container = useRef(null);
  const { scrollYProgress } = useScroll ({
    target: container,
    offset:['start end', 'end start']
  })

  const y = useTransform(scrollYProgress,[0, 1], [0, 1000])

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

    return(
    <div className='About'>
        <div className='About-Wrapper'>

            <div className='Content-Wrapper'>
                <div className='Content-Text' ref={animateRef}>
                <div className='Text-Wrapper-Overflow'>
                 <motion.div 
                 variants={{
                    hidden: {y:100},
                    visible: {y:0},
                 }}
                 initial='hidden'
                  animate={mainControls}
                  transition={{
                    duration: 0.1
                  }}
                  y={y}
                 className='Intro-Text'>Hi, I'm Richard.
                 </motion.div>
                 </div>
                   
                 <div className='Text-Wrapper-Overflow'>
                    
                    
                <motion.div
                 variants={{
                    hidden: {y:150},
                    visible: {y:0},
                 }}
                 initial='hidden'
                  animate={mainControls}
                  transition={{
                    duration: 1,
                    delay:0.6,
                  }}
                 className='Text-Wrapper'>
                 <div className='Text-Bio'> I'm a designer and web developer based in London. I love minimal designs, pizza and music. I use my passion and skills to create digital experiences. </div>
                 </motion.div>
                 </div>

                 <div className='Text-Wrapper-Overflow'>
                 <motion.div
                variants={{
                    hidden: {y:150},
                    visible: {y:0},
                 }}
                 initial='hidden'
                  animate={mainControls}
                  transition={{
                    duration: 1,
                    delay:0.6,
                  }}
                 className='Text-Wrapper'>
                 <div className='Text-Bio Spacer'>I'm a designer and web developer based in London. I love minimal designs, pizza and music. I use my passion and skills to create digital experiences. </div>
                 </motion.div>
                </div>
                </div>
                
                
            </div>

            <div className='About-Carousel'>
            <div className='Text-Wrapper-Overflow'>
            <motion.img 
              variants={{
                hidden: {opacity:0, y:100},
                visible: {opacity:1, y:0},
             }}
             initial='hidden'
              animate={mainControls}
              transition={{
                duration: 1.2,
                delay: 0.5,
              }}
            className='About-Img' 
            src={luna}
            ></motion.img>
            </div>

                <div className='About-Me'>
                    <div
                     className='Wrap'>
                        <motion.div
                         variants={{
                            hidden: {y:100},
                            visible: {y:0},
                         }}
                         initial='hidden'
                          animate={mainControls}
                          transition={{
                            duration: 0.6
                          }}
                        >ABOUT ME.</motion.div>      
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;