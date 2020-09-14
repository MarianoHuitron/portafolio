import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    <a 
                        href="https://github.com/MarianoHuitron" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="box" 
                    >
                        <FontAwesomeIcon icon={ faGithub }   className="icon-media" size="2x"/>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/mariano-huitron-8a2487180/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="box" 
                    >
                        <FontAwesomeIcon icon={ faLinkedin } className="icon-media" size="2x"/>
                    </a>

                    <a 
                        href="https://twitter.com/Soymarian0" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="box"    
                    >
                        <FontAwesomeIcon icon={ faTwitter }  className="icon-media" size="2x"/>

                    </a>
                </div>
                <p className="copy">
                    Mariano Huitron <span className="year">&copy; 2020</span>
                </p>
            </div>
        </footer>
    )
}
