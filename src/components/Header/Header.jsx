import React from "react";
import HeroImage from '../../assets/hero.png'
import './Header.css'
import { Helper } from "../HelperCom";

const NavItems = ['Home', 'Our Services', 'About', 'Contact Us'];


function calculator(a, b){
    const c = a + b
    return c
}



const Header = ()=>{


    return(
        <header>
            <div className="Logo">
                <img src={HeroImage} alt="" />
            </div>
            <nav>
                <ul style={{display: 'flex', alignItems:'center',}}>
                    {NavItems.map((v, index)=> (
                        <Helper key={index} title={v}/>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header