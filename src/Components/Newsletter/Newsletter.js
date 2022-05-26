import React, { useState } from 'react';
import { products } from '../../Data/Data';
import { BsArrowRight } from "react-icons/bs";
import '../../Scss/Components/Newsletter/Newsletter.scss';
import { ToastContainer, toast, Bounce, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Newsletter(){
    const notify = () => toast.success("Subscrito con éxito",{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Bounce
    });
    const notifyError = () => toast.error("Correo incorrecto",{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Zoom
    });
    const [ validate, setValidate ] = useState({
        email: '',
        regex: true
    });
    function handleOnChange(event){
        const { value } = event.target;
        setValidate({
            ...validate,
            email: value
        });
    }
    function handleOnSubmit(event){
        event.preventDefault();
        const regexEmail = /\S+@\S+\.\S+/;
        const { email } = validate;
        if(regexEmail.test(email)){
            setValidate({
                ...validate,
                regex: true,
                email: ''
            });
            notify()
        }
        else{
            setValidate({
                ...validate,
                regex: false
            });
            notifyError()
        }
    }


    return(
        <div className="newsletterContainer">
            <ToastContainer/>
            <div className='newsletterEl1'>
                <p>Instagram</p>
                <h1><a href='https://www.instagram.com/urbanclothes_col/'>#urbanclothes_col</a></h1>
            </div>
            <div className='newsletterEl2'>
                <div>
                    <img src={products[0].model} alt="model" />
                    <img src={products[1].model} alt="model" />
                    <img src={products[2].model} alt="model" />
                    <img src={products[3].model} alt="model" />
                    <img src={products[4].model} alt="model" />
                </div>
            </div>
            <div className='newsletterEl3'>
                <p>Newsletter</p>
                <h1>Suscribete</h1>
                <p>Y enterate de  todas las novedades</p>
                <div className={validate.regex === false? 'emailError' : 'normal'}>
                    <input type="email"  placeholder='Ingresa tu email' value={validate.email} onChange={handleOnChange}/>
                    <button type='submit' onClick={handleOnSubmit}>
                        <BsArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}