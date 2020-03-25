import React from 'react';
import {Route, Switch} from "react-router-dom"

import './App.css';

import HomePage from "./pages/homepage/homepage.component"

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
      <HomePage />
    </div>
  );
}

export default App;