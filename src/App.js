import React from "react";
import { Route, Switch } from "react-router-dom";
import AppMovies from './Components/AppMovies'
import Movie from './Components/Movie'
import "./App.css";

function App () {
 
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/" component={AppMovies} />
          <Route path="/Movies/:id" component={Movie} />
        </Switch>
      </div>
    );
}

export default App;
