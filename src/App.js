import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Battlesystem from './Container/Battlesystem/Battlesystem';
import Home from './Home'


function App (){

    return (
        <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/battlesystem" component={Battlesystem} />
              <Route component={Error} />
            
            </Switch>
          
        </div>

      )
 

}

export default App;