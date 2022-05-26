import React, { useState } from 'react';
import '../../Scss/Components/Menu/Menu.scss';
import urban from '../../Images/URBAN.png';
import { FaTshirt, FaWallet } from "react-icons/fa";
import { GiBeltBuckles, GiBilledCap } from "react-icons/gi";
import { IoGlasses, IoCaretDown } from "react-icons/io5";
import { Link } from 'react-scroll';

export default function Menu(){
    const [account, setAccount] = useState(false);
    function handleExpand(event){
        event.preventDefault();
        setAccount(!account);
    }


    return(
        <div className="menuContainer">
            <div className="menuElement1">
                <img src={urban} alt="logo" />
            </div>
            <div className="menuElement2">
                <div className="menuElement2Item1">
                    <div className="menuItem1El1">
                    <Link to='shirt' smooth={true} duration={1500} offset={-30}>
                        <button>
                            <FaTshirt/>
                        </button>
                    </Link>
                    </div>
                    <div className="menuItem1El2">
                        <span>Urban T-shirt</span>
                    </div>
                </div>
                <div className="menuElement2Item2">
                    <div className="menuItem2El1">
                    <Link to='belt' smooth={true} duration={1500} offset={-30}>
                        <button>
                            <GiBeltBuckles/>
                        </button>
                    </Link>
                    </div>
                    <div className="menuItem2El2">
                        <span>
                            Urban Belt
                        </span>
                    </div>
                </div>
                <div className="menuElement2Item3">
                    <div className="menuItem3El1">
                    <Link to='wallet' smooth={true} duration={1500} offset={-30}>
                        <button>
                            <FaWallet/>
                        </button>
                    </Link>
                    </div>
                    <div className="menuItem3El2">
                        <span>Urban Wallet</span>
                    </div>
                </div>
                <div className="menuElement2Item4">
                    <div className="menuItem4El1">
                    <Link to='glasses' smooth={true} duration={1500} offset={-30}>
                        <button>
                            <IoGlasses/>
                        </button>
                    </Link>
                    </div>
                    <div className="menuItem4El2">
                        <span>
                            Urban Glasses
                        </span>
                    </div>
                </div>
                <div className="menuElement2Item5">
                    <div className="menuItem5El1">
                    <Link to='gap' smooth={true} duration={1500} offset={-30}>
                        <button>
                            <GiBilledCap/>
                        </button>
                    </Link>
                    </div>
                    <div className="menuItem5El2">
                        <span>
                            Urban Gap
                        </span>
                    </div>
                </div>
            </div>
            <div className="menuElement3">
                <div className="menuElement3Item1">
                    <div onClick={handleExpand} className='menuMyAccount'>
                        <span>My Account</span>
                        <button>
                            <IoCaretDown/>
                        </button>
                        { account && 
                            <div>
                                <li>Log In</li>
                                <li>Sign Up</li>
                            </div>
                        }
                    </div>
                </div>
                <div className="menuElement3Item2">
                    <div>
                        <span>Mi compra</span>
                    </div>
                </div>
            </div>
        </div>
    )
}