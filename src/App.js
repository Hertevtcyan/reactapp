import React, { useState } from 'react';
import './App.css';
import { Green, NavBar } from './Nods/Components/index'
import Routes from './Nods/Routes';
import { Route } from 'react-router-dom';

const App = () =>{

  
  


  return(
    <div>
          <header>
                  <NavBar/>
                  <Route exact path = {'/'}>
                    <Green/>
                  </Route>
          </header>

          <section>
                  <Routes/>

          </section>

          <footer>

          </footer>
    </div>

    
  )
}

export default App