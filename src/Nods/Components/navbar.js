import React from 'react'
import '../Assets/navbar.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () =>{
    return(
        <div className = {'navbar_div'}>
            <nav>
                <ul>
                    <li>
                        <h2><NavLink className = {'navlink1'} to = {'/'}>conduit</NavLink></h2>
                    </li>
                    <li className = {'l1'}>
                        <NavLink className = {'navlink2'} to = {'/'}>Home</NavLink>
                    </li>
                    <li className = {'l1'}>
                        <NavLink className = {'navlink2'} to = {'/'}>Sing In</NavLink>
                    </li>
                    <li className = {'l1'}>
                        <NavLink className = {'navlink2'} to = {'/'}>Sing Up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;