import React, { useState, useEffect, useRef } from 'react'
import '../Assets/signIn.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Load from '../Components/Loading/load'
import classNames from 'classnames'

export default ()=>{

const [users, setUsers] = useState( [])
const [load, setLoad] = useState( false)
const [color, setColor] = useState(false)
const aaa = useRef(null)

useEffect(()=>{

    aaa.current.focus()
    
    setLoad(true)

    axios.get('https://jsonplaceholder.typicode.com/users').then((result)=>{
        setUsers( result.data )
        console.log(users)
        setLoad(false)
        
    })
} ,[ color ])

    return(
        <div className = {'mother_div'}>
            <div>
                <h1>Sign In</h1>
                <h4><NavLink className = {'signIn_nav'} to = {'/signUp'}>Need an account?</NavLink></h4>
            </div>
            <form>
                <input ref = {aaa} className = {'input_mail'} type = 'text' placeholder = 'Email' /><br/>
                        <input className = {'input_pass'} type = 'password' placeholder = 'Password' /><br/>
                        <button
                            className = {'btn btn-success signIn_but'}>
                            Sign In
                        </button>

                        <button
                        onClick = {()=>{
                            setColor(!color)
                            
                        }}
                        className = {'btn btn-success'}>
                            OK
                        </button>
            </form>
            

            <div>
                {load  ? <Load/>:
                 users.map(( {name} , i) =>{
                        return(
                            <div key = {i}>
                                <p>{name}</p>
                            </div>
                        )
                    })}
               

            </div>
           

        </div>
    )
}