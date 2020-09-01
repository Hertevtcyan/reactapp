import React from 'react'
import '../Assets/signIn.scss'
import { NavLink } from 'react-router-dom'

export default ()=>{
    return(
        <div>
            <div>
                <h1>Sign In</h1>
                <NavLink to = {'/signUp'}>Need an account?</NavLink>
            </div>

            <input type = 'text' placeholder = 'Email' />
            <input type = 'password' placeholder = 'Password' />
        </div>
    )
}