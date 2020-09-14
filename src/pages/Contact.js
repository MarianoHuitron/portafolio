import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/Button';
import { useForm } from '../hooks/useForm';

export const Contact = () => {

    const [ formValues, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState({
        load: false,
        success: null,
        error: false
    });

    const { load, success, error } = loading;

    const { name, email, message } = formValues;

    const sendMail = async () => {
        setLoading({
            ...loading,
            load: true
        });

        try {
            await emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, formValues, process.env.REACT_APP_EMAIL_USER_ID);
            setLoading({
                load: false,
                success: true
            })
            reset();

        } catch(err) {
            console.log(err)
            setLoading({
                load: false,
                success: false,
                error: true
            })
        }

        setTimeout(() => {
            setLoading({
                ...loading,
                success: false,
                error: false
            })
        }, 1000)


    }


    const handleSubmint = (e) => {
        e.preventDefault();
        if(load) return;
        if(name.trim().length < 2) return;
        if(email.trim().length < 2) return;
        if(message.trim().length < 2) return;
        
        sendMail();
    }

    return (
        <section className="contact" id="contact">
            <h2>Contácto</h2>
            <div className="line"></div>

            <div className="container">
                <form onSubmit={ handleSubmint } className="contact-form">
                    <input
                        onChange={ handleInputChange }
                        value={ name }
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required
                        autoComplete="off"
                        className="input-form" />

                    <input 
                        onChange={ handleInputChange }
                        value={ email }
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        autoComplete="off"
                        className="input-form" />

                    <textarea 
                        onChange={ handleInputChange }
                        value={ message }
                        name="message"
                        placeholder="Tu mensaje" 
                        required
                        className="text-area">    
                    </textarea>
                    <Button text="Enviar" />
                </form>
                {
                    load &&  <div className="loading">
                                    <FontAwesomeIcon icon={ faSpinner } spin size="2x" />
                                </div>
                }
                {
                    (!load && success) &&
                                <div className="loading">
                                    <FontAwesomeIcon icon={ faCheck } size="2x" />
                                </div>
                }
                {
                    (!load && !success && error) &&
                                <div className="loading">
                                    <FontAwesomeIcon icon={ faTimes } size="2x" />
                                </div>
                }
               
            </div>

        </section>
    )
}
