import React from 'react'
import { Switch, Route } from 'react-router-dom'

export default ()=>{
    return(
        <div>
            <Switch>
                
            <Route exact path = {'/'}> </Route>

            <Route path = {'/signIn'} > </Route>

            <Route path = {'/signUp'}></Route>

            <Route path = {'/posts/:id'}></Route>

            </Switch>

            

        </div>
    )
}