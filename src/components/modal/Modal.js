import React, { useContext } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ProyectContext } from '../grid/ProyectContext';
import { Button2 } from '../button/Button';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './modal.css';

export const Modal = () => {

    const { currentProyect, setCurrentProyect } = useContext(ProyectContext)
    const { images, name, tecs, desc, urlGit, urlLive } =  currentProyect;

    const primaryOptions = {
        type: 'fade',
        arrows: false
      
    }

    return (
        <div className="modal">
            
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => setCurrentProyect({}) } className="close">&times;</span>  
                    <Splide options={ primaryOptions }>
                        {
                            images.map((image, i) => (
                                <SplideSlide key={i}>
                                    <img src={ image } alt="alt"  className="img" />
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                                     
                </div>
                <div className="modal-body">
                    <div className="info">
                        <h3 className="modal-title">{ name }</h3>
                        <p className="tecs-proyect">{ tecs }</p>
                        <p className="modal-desc">{ desc }</p>
                        <div className="external-links">
                            {
                                !!urlGit && <Button2 text="Ver en GitHub" icon={ faGithub } url={ urlGit } />
                            }
                            {
                                !!urlLive && <Button2 text="Ver online" icon={ faGlobeAmericas } url={ urlLive } />
                            }
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
