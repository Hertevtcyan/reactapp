import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { SignIn } from '../index'

export default ()=>{
    return(
        <div>
            <Switch>

            <Route exact path = {'/'}> </Route>

            <Route path = {'/signIn'} >
                 <SignIn/>
             </Route>

             <Route path = {'/signUp'}>
                 <SignIn/>
             </Route>

            

            <Route path = {'/posts/:id'}></Route>

            </Switch>

            

        </div>
    )
}