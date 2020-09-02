import React from 'react'
import '../Assets/signIn.scss'
import { NavLink } from 'react-router-dom'

export default ()=>{
    return(
        <div className = {'mother_div'}>
            <div>
                <h1>Sign In</h1>
                <h4><NavLink className = {'signIn_nav'} to = {'/signUp'}>Need an account?</NavLink></h4>
            </div>

            <input className = {'input_mail'} type = 'text' placeholder = 'Email' /><br/>
            <input className = {'input_pass'} type = 'password' placeholder = 'Password' /><br/>
            <button className = {'btn btn-success signIn_but'}>Sign In</button>
        </div>
    )
}