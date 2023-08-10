import React, {useRef} from "react";
import "./App.css";
/*import CTO from './Components/CTO';*/
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import CV from '/home/mvra/Desktop/RJLStudios React Portfolio/src/Images/Richard Kelly Web Developer CV - 08.08.pdf';




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

      <Homepage/>
     
      <div className='Projects' ref={projectRef}>
            <div className='Projects-Title'>
                <h2 className='Projects-Header'>Projects</h2>

            </div>
            <div className='Projects-Wrapper'>
            <div className='Projects-Grid'>

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
                            <a href='https://rjlstudios.github.io/Weather-App/' target='_blank'><button class='Card-Btn'>Visit</button></a>
                            <a href='https://github.com/RJLStudios/Weather-App' target='_blank'><button class='Src-Btn'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='Grid-Item'>
                    <div className='Card'>
                        <div className='Card-Img'>
                            <img className='Project-SC' src='https://www.thetechedvocate.org/wp-content/uploads/2023/05/create-music-streaming-app-like-Spotify.png'></img>
                        </div>
                        <div className='Card-Content'>
                            <h1 class='Card-Header'>Spotify Player</h1>
                            <p class='Card-Bio'>A spotify app  created and curated by my playlists, with plans to utilise the Spotify API.</p>
                            <div class='Btn-Wrapper'>
                             <a href='https://rjlstudios.github.io/Spotify-Clone/' target='_blank'><button class='Card-Btn'>Visit</button></a>
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
            className="Email-form"
            action="mailto::Richardkelly1612@hotmail.com"
          >
            <div class="form-outline">
            <label class="form-label" for="formControlLg">
                Your Name
              </label>
              <input
                type="text"
                id="formControlLg"
                class="form-control form-control-lg"
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
              />
            
            </div>

            <div className="button-wrapper">
              <submit className="button" type="submit" value="submit">
                SUBMIT
              </submit>
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
