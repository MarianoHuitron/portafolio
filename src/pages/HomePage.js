import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { About } from './About'
import { Contact } from './Contact'
import { Portfolio } from './Portfolio'

const style ={
    color: '#28df99'
}



export const HomePage = () => {
    return (
        <>
            <header className="hero" id="home">
                <h1>Hola, Soy <span style={ style }>Mariano Huitron</span>.</h1>
                <p>  
                    <code>
                        &lt; Desarrollador web /&gt;
                    </code>
                </p>
            </header>
            
            <Navbar />

            <main className="content">
                
                <About />
                <Portfolio />
                <Contact />

            </main>

            <Footer />

            
        </>
    )
}
