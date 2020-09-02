import React from 'react'
import '../Assets/signUp.scss'
import { NavLink } from 'react-router-dom'


export default ()=>{
    return(
        <div className = {'mother_divUp'}>
                <div>
                    <h1>Sign Up</h1>
                    <h4><NavLink className = {'signUp_nav'} to = {'/signIn'}>Have an account?</NavLink></h4>
                </div>

                <input className = {'input_name'} type = 'text' placeholder = 'Username' /><br/>
                <input className = {'input_email'} type = 'text' placeholder = 'Email' /><br/>
                <input className = {'input_password'} type = 'password' placeholder = 'Password' /><br/>
                <button className = {'btn btn-success signUp_but'}>Sign Up</button>
        </div>
    )
}