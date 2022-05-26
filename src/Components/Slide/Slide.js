import React from 'react';
import { slidesImages } from '../../Data/Slides';
import '../../Scss/Components/Slide/Slide.scss';
import Menu from '../Menu/Menu';

export default function Slide(){
    return(
            <>
            <div className='slideMenu'>
                <Menu/>
            </div>
            <div className="slider"> 
                <li>
                    <input type="radio" id='button1' name='button' />
                    <label htmlFor='button1'></label>
                    <img src={slidesImages[0]} alt="slide" />
                </li>
                <li>
                    <input type="radio" id='button2' name='button' defaultChecked/>
                    <label htmlFor='button2'></label>
                    <img src={slidesImages[1]} alt="slide" />
                </li>
                <li>
                    <input type="radio" id='button3' name='button'/>
                    <label htmlFor='button3'></label>
                    <img src={slidesImages[2]} alt="slide" />
                </li>
            </div>
            </>
    )
}