import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Detail from "./Pokecard/detail";
import Home from "./Pokecard/Home"
import './App.css';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />  
          <Route path="/detail/:id" component={Detail} />    
        </Switch>
      </div>
    </Router>
  )
}

export default App;