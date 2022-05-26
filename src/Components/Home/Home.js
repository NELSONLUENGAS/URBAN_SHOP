import React from 'react';
import Slide from '../Slide/Slide';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Newsletter from '../Newsletter/Newsletter';
import '../../Scss/Components/Home/Home.scss';

export default function Home(){
    return(
        <div className='homeContainer'>
            <div className='homeElement1'>
                <Slide/>
            </div>
            <div className='homeElement2'>
                <Products/>
            </div>
            <div className='homeElement3'>
                <Newsletter/>
            </div>
            <div className='homeElement3'>
                <Footer/>
            </div>
        </div>
    )
}