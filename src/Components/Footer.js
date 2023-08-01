import react from 'react';

export default function footer(){
    return(
        <div className='footer'>
            <div className='Footer-Title'>RJLStudios</div>
            <ul className='Footer-UL'>
                <li className='Footer-li'>HOME</li>
                <li className='Footer-li Projects-Li'>PROJECTS</li>
                <li className='Footer-li'>CONTACT ME</li>
            </ul>
            <div className='Header-Icon-Bar'>
                <div className='Header-Icons'>
                <a href='https://twitter.com/home?lang=en' target='blank'><img className='Twitter'  href='https://github.com/RJLStudios' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' alt='Twitter icon'></img></a>
                    <a href='https://github.com/RJLStudios' target='blank'><img className='Github' href='https://github.com/RJLStudios' target='blank' src='https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png' alt='Git icon'></img></a>
                </div>
            </div>
        </div>
    );
}

