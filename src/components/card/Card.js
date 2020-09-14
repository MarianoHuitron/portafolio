import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';

export const Card = ({ icon, title, desc, tecs }) => {
    return (
        <div className="card">
            <div className="card-header">
                <FontAwesomeIcon 
                    icon={ icon } 
                    color="#28df99" 
                    className="card-icon"
                    size="3x" />
                <div className="card-title" >{ title }</div>
            </div>
            <div className="card-body">
                <div className="card-text">
                    { desc }
                </div>
                <div className="tools">Tecnoloías</div>
                <div className="tools-items">
                   { tecs }
                </div>
            </div>    
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tecs: PropTypes.string.isRequired
}
