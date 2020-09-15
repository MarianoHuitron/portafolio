import React from 'react'
import { Button2 } from '../components/button/Button'
import { GridItems } from '../components/grid/GridItems'
import resume from '../assets/MarianoResume.pdf'
export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <h2>Portafolio</h2>
                <div className="line"></div>

                <GridItems />
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>

                <Button2 text="Obten mi CV" url={ resume } />
            </div>
        </section >
    )
}
