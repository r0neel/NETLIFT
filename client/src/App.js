import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// import './App.css';

import { History, LoginPage, Progress, RegisterPage, Settings } from "./pages";
import { NavBar } from './components'

const App = () => {
  return(
  <>
    {/* <Pages.RegisterPage /> */}
    <NavBar />
    <Switch>
      {/* <Route exact path='/'><Home /></Route> */}
      <Route path='/login'><LoginPage/></Route>
      <Route path='/register'><RegisterPage /></Route>
      <Route path='/history'><History /></Route>
      <Route path='/progress'><Progress /></Route>
      <Route path='/settings'><Settings /></Route>
    </Switch>
  </>
)};

export default App;
