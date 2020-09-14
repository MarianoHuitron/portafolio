import React from 'react'
import { faMobileAlt, faServer, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../components/card/Card'

export const About = () => {

    const contentCards = [{
        icon: faMobileAlt,
        title: 'Mobile Development',
        desc: 'En mi proceso he desarrollado algunas aplicaciones móviles, aunque aún tengo que profundizar más en este tema.',
        tecs: 'Javascript, Ionic, Cordova'
    },
    {
        icon: faLaptopCode,
        title: 'Frontend Development',
        desc: 'La parte que más me gusta hacer como desarrollador web. Estoy trabajando pricipalmente en tecnologías para el front.',
        tecs: 'HTML5, CSS3, Sass, Bootstrap, Angular, React, '
    },
    {
        icon: faServer,
        title: 'Backend Development',
        desc: 'Tecnologías que me han servido para poder realizar mis aplicaciones. Normalmente, me despeño bien utilizando Javascript.',
        tecs: 'NodeJs, MongoDB, Express, PHP(Básico), MySQL'
    }];

    return (
        <section className="about" id="about">
            <div className="container">
                <h2>Sobre mi</h2>
                <div className="line"></div>
                <p className="about-text">
                    Soy orgullosamente de un pueblo en Nayarit, México. Comencé con mi carrera en TICs en el 2018 y estoy por graduarme. Tengo un especial interés por el desarrollo web y móvil por lo que he realizado algunos proyectos para aprender.
                </p>
                
                <div className="flex-cards">
                    {
                        contentCards.map(({icon, title, desc, tecs}, i) => (
                            <Card 
                                key={ i } 
                                icon={ icon }
                                title={ title }
                                desc={ desc }
                                tecs={ tecs } />
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}
