import React, { useState } from 'react';
import './App.css';
import { Green, NavBar } from './Nods/Components/index'


import Routes from './Nods/Routes';

const App = () =>{
  

  return(
    <div>
          <header>
                  <NavBar/>
                  <Green/>
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