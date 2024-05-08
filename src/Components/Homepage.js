import React from "react";
import {
  motion,
} from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Homepage() {

  //CV DOWNLOAD BUTTON
  const cvButtonDL = () => {
    const cvUrl =
      process.env.PUBLIC_URL + "./Richard Kelly - CV 04.04.24.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Richard Kelly.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="Homepage" id="Homepage">
  
  

    
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

  );
}

export default Homepage;
