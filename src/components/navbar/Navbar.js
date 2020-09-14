import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom'
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
        const navItems = document.getElementById('nav-items');
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

            <ul className="nav-items" id="nav-items">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>  
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">Sobre mi</a>  
                </li>
                <li className="nav-item">
                    <a href="#portafolio" className="nav-link">Portafolio</a>  
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contácto </a>  
                </li>
            </ul>
        </nav>
    )
}
