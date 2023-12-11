import React from "react";

function Homepage() {
  return (
    
    <div  className="Homepage" id="Homepage">
      <div className="Home-Bio">
        <div className="Intro-text">
          <h1 className="Intro-H1">
            I'M RICHARD, A FRONT-END DEVELOPER BASED IN LONDON.
          </h1>
          <p className="Intro-P">
            A self taught developer specialising in front-end languages and
            frameworks such as HTML, CSS, JavaScript and React.
          </p>

          <p className="Intro-P">
            I believe in incorporating passions (such as music!) to create
            convenient applications.
          </p>

          <p className="Intro-P">
            I'm currently looking for a new role as a developer. Hire me?
          </p>

          <div className="Intro-links">
            <a src='./Richard Kelly Web Developer CV - 08.08.pdf' download=''><button className="Link-A">View Resume</button></a>
            <a href='https://github.com/RJLStudios' ><button className="Link-A"  >View Github</button></a>
            <a href='https://www.linkedin.com/in/richard-kelly-764602156/'><button className="Link-A">View LinkedIn</button></a>
          </div>

         
        </div>
        <div className='Profile-Pic'>
            <img className='PFP'  alt='pfp alt'></img>
        </div>
      </div>

      
    </div>
  );
}

export default Homepage;
