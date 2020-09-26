// import React, { useState, useEffect, useRef } from 'react'
// import '../Assets/signIn.scss'
// import { NavLink } from 'react-router-dom'
// import axios from 'axios'
// import Load from '../Components/Loading/load'
// import classNames from 'classnames'


// function emailValidation(value){
//     return value.match("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+")
// }

// export default ()=>{

// const [users, setUsers] = useState( [])
// const [load, setLoad] = useState( false)
// const [color, setColor] = useState(false)
// // const aaa = useRef(null)

// const [isError, setIsError] = useState( false)
// const [isDisabled, setIsDisabled] = useState( true)
// const [mail, setMail] = useState( '')
// const [pass, setPass] = useState( '')
// // useEffect(()=>{

// //     aaa.current.focus()
    
// //     setLoad(true)

// //     axios.get('https://jsonplaceholder.typicode.com/users').then((result)=>{
// //         setUsers( result.data )
// //         console.log(users)
// //         setLoad(false)
        
// //     })
// // } ,[ color ])

// const changeMail =(e)=>{
//     setMail(e.target.value)
//     if(emailValidation(e.target.value)){
//         console.log('chisht')
//     }else{ 
//     }
    


// }

// const changePass = (e) =>{
//     setPass(e.target.value)

// }

//     return(
//         <div className = {'mother_div'}>
//             <div>
//                 <h1>Sign In</h1>
//                 <h4><NavLink className = {'signIn_nav'} to = {'/signUp'}>Need an account?</NavLink></h4>
//             </div>
//             <form className = {classNames({'mother_form':isError})}>
//                 <input className = {'input_mail'} onChange = {changeMail} value = {mail} type = 'text' placeholder = 'Email' /><br/>
//                         <input className = {'input_pass'} onChange = {changePass} value = {pass} type = 'password' placeholder = 'Password' /><br/>
//                         <button
                        
//                             className = {classNames('btn btn-success signIn_but', {'disabled':isDisabled})}>
//                             Sign In
//                         </button>

//                         {/* <button
                        
//                         onClick = {()=>{
//                             setColor(!color)
                            
//                         }}
//                         className = {'btn btn-success'}>
//                             OK
//                         </button> */}
//             </form>
            

//             <div>
//                 {load  ? <Load/>:
//                  users.map(( {name} , i) =>{
//                         return(
//                             <div key = {i}>
//                                 <p>{name}</p>
//                             </div>
//                         )
//                     })}
               

//             </div>
           

//         </div>
//     )
// }


import React, { useState } from 'react'
import '../Assets/signIn.scss'
import { NavLink, withRouter } from 'react-router-dom'
import classNames from 'classnames'



function emailValidation(value) {
    return value.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
}

function passValidation(value) {
    return value.match('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')
}


const SignIn = ( props ) =>{
    console.log(props)

    const [nameIsInvalid, setNameIsInvalid] = useState( true )
    const [emailIsInvalid, setEmailIsInvalid] = useState( true )
    const [passIsInvalid, setPassIsInvalid] = useState( true )


    const [nameIsTouched, setNameIsTouched] = useState( false )
    const [emailIsTouched, setEmailIsTouched] = useState( false )
    const [passIsTouched, setPassIsTouched] = useState( false )


    const [name, setName] = useState( '' )
    const [email, setEmail] = useState( '' )
    const [password, setPassword] = useState( '' )


    const location = props.location.pathname


    const changeNameHandler =(e)=>{
        setName(e.target.value)
        setNameIsTouched( true )
        if(e.target.value.length > 4){
            setNameIsInvalid( false )

        }else{
            setNameIsInvalid( true )
        }

    }


    const changeEmailHandler =(e)=>{
        setEmail(e.target.value)
        setEmailIsTouched( true )
        if(emailValidation(e.target.value)){
            setEmailIsInvalid( false )
        }else{
            setEmailIsInvalid( true )
        }

    }

    const changePasswordHandler =(e)=>{
        setPassword(e.target.value)
        setPassIsTouched( true )
        if(passValidation(e.target.value)){
            setPassIsInvalid( false )
        }else{
            setPassIsInvalid( true )
        }

    }

    
    
    return(
        <div className = {'mother_div'}>
            <div>
                <h1>
                    {
                        location == '/signIn' ? 'Sign In':'Sign Up'
                    }
                </h1>
                <h4><NavLink className = {'signIn_nav'} to = { location == '/signIn' ? '/signUp':'/signIn' }>
                    {
                        location == '/signIn' ? 'Need an acount?':'Have an acount?'
                    }
                    
                </NavLink></h4>
            </div>

            <form>
                {
                    location == '/signUp' ? 
                    <input className = 
                    {classNames('input_name', {'err__message':nameIsInvalid && nameIsTouched})} type = 'text'
                     placeholder = 'Username' onChange = {changeNameHandler} value = {name}  />:null
                }
                <input
                 className={classNames('input_mail', {'err__message':emailIsInvalid && emailIsTouched})} onChange={changeEmailHandler}  type = 'text' placeholder = 'Email' value={email} /><br/>
                <input
                 className = {classNames('input_pass', {'err__message':passIsInvalid && passIsTouched})}
                 onChange={changePasswordHandler} type = 'password' value={password} placeholder = 'Password' /><br/>
                <button className = {classNames('btn btn-success signIn_but')}
                 disabled = {
                      location == '/signUp' ? nameIsInvalid || emailIsInvalid || passIsInvalid: emailIsInvalid || passIsInvalid
                 }>
                     {
                         location == '/signIn' ? 'Sign In':'Sign Up'
                     }
                </button>

            </form>

        </div>
    )
}

export default withRouter( SignIn )