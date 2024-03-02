import React, {useRef} from "react";
import "./App.css";
import emailjs from '@emailjs/browser'
/*import CTO from './Components/CTO';*/
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import BeatStoreImage from './Images/Beat Store.png';





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
    const cvPDF = 'Sample.pdf';
    const link = document.createElement('a')
    link.href = cvPDF;
    link.download = '.src/Richard Kelly - CV 30.11 - Copy (1).pdf';
    document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        <div className='Navbar' ref={homeRef}>
       <h3 className='Logo'>RJLStudios</h3>
         <ul className='Header-links'>
            <li className='Home-btn' onClick={homeScrollToComponent}>Home</li>
            <li className='Projects-btn' onClick={projectScrollToComponent}>Projects</li>
            <li className='contact-btn' onClick={ctoScrollToComponent}>Contact Me</li>
         </ul>
        </div>

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
            I'm currently looking for a new role as a developer.
          </p>

          <div className="Intro-links">
            <a src='src\Richard Kelly - CV 30.11 - Copy (1).pdf' download=''><button className="Link-A" onClick={cvButtonDL}>View Resume</button></a>
            <a href='https://github.com/RJLStudios' ><button className="Link-A"  >View Github</button></a>
            <a href='https://www.linkedin.com/in/richard-kelly-764602156/'><button className="Link-A">View LinkedIn</button></a>
          </div>

         
        </div>
      
      
      </div>

      
    </div>
      <div className='Projects' ref={projectRef}>
            <div className='Projects-Title'>
                <h2 className='Projects-Header'>Projects</h2>

            </div>
            <div className='Projects-Wrapper'>
            <div className='Projects-Grid'>

               

            <div className='Grid-Item'>
                    <div className='Card'>
                        <div className='Card-Img'>
                            <img className='Project-SC' src='https://assets-global.website-files.com/6176f98d9518dc8adcea560e/61c0e460ea6d0c73fca35508_3%20Vital%20BeatStars%20Features%20You%27re%20Sleeping%20On.jpg' alt='beatstore'></img>
                        </div>
                        <div className='Card-Content'>
                            <h1 class='Card-Header'>Beat Store</h1>
                            <p class='Card-Bio'>A digital production marketplace that allows clients to license and sell my beats.</p>
                            <div class='Btn-Wrapper'>
                             <a href='https://rjlstudios.github.io/react-beatstore/' target='_blank'><button class='Card-Btn'>Visit</button></a>
                             <a href='https://github.com/RJLStudios/react-beatstore' target='_blank'><button class='Src-Btn'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='Grid-Item'>
                    <div className='Card'>         
                        <div className='Card-Img'>
                            <img className='Project-SC' src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png'></img>
                        </div>
                        
                        <div className='Card-Content'>
                            <h1 class='Card-Header'>Portfolio App</h1>
                            <p class='Card-Bio'>A virtual resume for all current work. You may already be looking at this project!
                            </p>
                            <div class='Btn-Wrapper'>
                             <a href='https://github.com/RJLStudios/RJLStudios-React-Portfolio-' target='_blank'><button class='Src-Btn'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='Grid-Item'>
                    <div className='Card'>
                        <div className='Card-Img'>
                            <img className='Project-SC' src='https://s3-alpha.figma.com/hub/file/2477810093/c41260d4-7e79-44cf-b759-411368380fa0-cover.png'></img>
                        </div>
                        <div className='Card-Content'>
                            <h1 class='Card-Header'>Weather App</h1>
                            <p class='Card-Bio'>A weather app utilising the OpenWeatherMap API to fetch data using query search.</p>
                            <div class='Btn-Wrapper'>
                            <a href='https://rjlstudios.github.io/Weather-App/' target='_blank'><button class='Card-Btn-Pending'>Visit</button></a>
                            <a href='https://github.com/RJLStudios/Weather-App' target='_blank'><button class='Src-Btn'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='Grid-Item'>
                    <div className='Card'>
                        <div className='Card-Img'>
                            <img className='Project-SC Beatstore-Img' src='https://www.thetechedvocate.org/wp-content/uploads/2023/05/create-music-streaming-app-like-Spotify.png'></img>
                        </div>
                        <div className='Card-Content'>
                            <h1 class='Card-Header'>Spotify Player</h1>
                            <p class='Card-Bio'>A spotify app  created and curated by my playlists, with plans to utilise the Spotify API.</p>
                            <div class='Btn-Wrapper'>
                             <a href='https://rjlstudios.github.io/RJL-Spotify/' target='_blank'><button class=' Card-Btn'>Visit</button></a>
                             <a href='https://github.com/RJLStudios/Spotify-Clone' target='_blank'><button class='Src-Btn'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            </div>
            

        </div>

      <Skills/>


     
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
            <ul className='Footer-UL'>
                <li className='Footer-li' onClick={homeScrollToComponent} >HOME</li>
                <li className='Footer-li Projects-Li' onClick={projectScrollToComponent} >PROJECTS</li>
                <li className='Footer-li' onClick={ctoScrollToComponent} >CONTACT ME</li>
            </ul>
            <div className='Header-Icon-Bar'>
                <div className='Header-Icons'>
                <a href='https://twitter.com/home?lang=en' target='blank'><img className='Twitter'  href='https://github.com/RJLStudios' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' alt='Twitter icon'></img></a>
                    <a href='https://github.com/RJLStudios' target='blank'><img className='Github' href='https://github.com/RJLStudios' target='blank' src='https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png' alt='Git icon'></img></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
