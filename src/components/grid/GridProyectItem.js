import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Button } from '../button/Button'
import { ProyectContext } from './ProyectContext';

export const GridProyectItem = ( { proyect  } ) => {

    const { mainImage, name, tecs } = proyect;

    const { setCurrentProyect } =  useContext(ProyectContext);

    const handleClick = () => {
        setCurrentProyect(proyect);
        
    }

    return (
        <>
            <div className="proyect">
                <div className="img-box">
                    <img src={ mainImage } width="200" alt="rutaz" />
                </div>
                <div className="details">
                    <div className="details-content">
                        <h3 className="title-proyect">{ name }</h3>
                        <p className="tecs-proyect" >{ tecs }</p>
                        <Button
                            handleClick={ handleClick }
                            text="Leer mas" /> 
                    </div>
                </div>
            </div>
        </>
    )
}


GridProyectItem.propTypes = {
    proyect: PropTypes.object.isRequired
}