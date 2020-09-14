import React, { useState } from 'react';
import { getProyects } from '../../helpers/getProyects';
import { GridProyectItem } from './GridProyectItem';
import { Modal } from '../modal/Modal';
import { ProyectContext } from './ProyectContext';
import './gridItems.css';

export const GridItems = () => {

    const proyects = getProyects();
    
    const [currentProyect, setCurrentProyect] = useState({})
   

    return (
        <ProyectContext.Provider value={{
            currentProyect,
            setCurrentProyect
        }}>
            <div className="proyects-grid">
                {
                    proyects.map(proyect => (
                        <GridProyectItem 
                            key={ proyect.id }
                            proyect={ proyect }
                        />
                    ))
                }
            </div>
            {
                
                (Object.keys(currentProyect).length !== 0)  && <Modal />
            }
           
        </ProyectContext.Provider>
    )
}
