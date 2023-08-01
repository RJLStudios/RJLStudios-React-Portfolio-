import React from 'react';
import {scroller} from 'react-scroll';



function Header() {
    return (
        <div className='Navbar'>
       <h3 className='Logo'>RJLStudios</h3>
         <ul className='Header-links'>
            <li className='Home-btn'>Home</li>
            <li className='Projects-btn'>Projects</li>
            <li className='contact-btn'>Contact Me</li>
         </ul>
        </div>
          
    )
}

export default Header;

