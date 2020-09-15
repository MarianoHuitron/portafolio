import React, { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';

export const Navbar = () => {
    const [navTop, setNavTop] = useState();

    
    useEffect(() => {
        const navbar = document.getElementById('navbar');
        setNavTop(navbar.offsetTop)


    }, [])
    
    const handleToogle = () => {
        const navItems = document.querySelector('.nav-items');
        navItems.classList.toggle('show')
    }

    window.onscroll = () => {
        const navbar = document.getElementById('navbar');
    
        if(window.pageYOffset >= navTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    return (
        <nav className="navbar" id="navbar" >
            <FontAwesomeIcon 
                onClick={ handleToogle }
                icon={ faBars } 
                size="2x" 
                color="white"
                className="menu-icon" />

            <Scrollspy 
                items={ ['home', 'about', 'portfolio', 'contact'] } 
                componentTag="ul"
                currentClassName="active" 
                className="nav-items" 
                id="nav-items">

                    <a href="#home" className="nav-link ">Home</a>  
                    <a href="#about" className="nav-link">Sobre mi</a>  
                    <a href="#portfolio" className="nav-link">Portafolio</a>  
                    <a href="#contact" className="nav-link">Contácto </a> 
                     
            </Scrollspy>
                
        </nav>
    )
}
