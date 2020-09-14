import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './button.css';

export const Button = ({ text, handleClick = ()=> {} }) => (
    <button onClick={ handleClick } className="button">
        { text }
    </button>
)
export const Button2 = ({ text, icon ,url }) => {
    return (
        <a  className="button" href={ url } target="_blank" rel="noopener noreferrer" > 
            { text } { icon && <FontAwesomeIcon icon={ icon } />}
        </a>
    )
} 
    




Button.propTypes = {
    text: PropTypes.string.isRequired
}


