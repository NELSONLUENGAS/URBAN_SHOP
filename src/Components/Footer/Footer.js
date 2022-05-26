import React from 'react';
import '../../Scss/Components/Footer/Footer.scss';
import urban from '../../Images/URBAN.png';
import security from '../../Images/SECURITY.png';
import QR from '../../Images/QR.png';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";



export default function Footer(){
    return(
        <div className="footerContainer">
            <div className='footerBody'>
                <div className='footerElement1'>
                    <div>
                        <img src={urban} alt="icono" />
                    </div>
                    <div>
                        <li>Urban T-Shirt</li>
                        <li>Urban Belt</li>
                        <li>Urban Wallet</li>
                        <li>Urban Gap</li>
                    </div>
                </div>
                <div className='footerElement2'>
                    <li>Contacto</li>
                    <li>Ayuda</li>
                    <li>Cómo comprar</li>
                    <li>Términos y condiciones</li>
                </div>
                <div className='footerElement3'>
                    <div className='footerItem1'>
                        <span>Compra 100% segura</span>
                    </div>
                    <div className='footerItem2'>
                        <div className='footerItem2_1'>
                            <img src={QR} alt="qr" />
                        </div>
                        <div className='footerItem2_2'>
                            <div>
                                <img src={security} alt="security" />
                                <span>Compra con la garantia de Urban shop</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footerElement4'>
                    <span>
                        Siguenos en
                    </span>
                    <button>
                        <BsFacebook/>
                    </button>
                    <button>
                        <BsInstagram/>
                    </button>
                    <button>
                        <BsTwitter/>
                    </button>
                </div>
            </div>
            <span>Urban Shop Copyright 2022 - Todos los derechos reservados</span>
        </div>
    )
}