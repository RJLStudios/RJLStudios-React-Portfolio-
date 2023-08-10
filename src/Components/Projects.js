import React from 'react';

function Projects() {
    return(
        <div className='Projects'>
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
    )
}

export default Projects;