import React from "react";
import HeroImage from '../../assets/hero.png'
import './Header.css'
import { NavLink } from "react-router-dom";



const Header = ()=>{


    return(
        <header>
            <div className="Logo">
                <img src={HeroImage} alt="" />
            </div>
            <nav>
                <ul style={{display: 'flex', alignItems:'center',}}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Skills'>Skills</NavLink>
                    <NavLink to='/Navbar'>Navbar</NavLink>
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header