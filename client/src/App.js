import React from 'react';
import {  Route, Routes } from 'react-router-dom';


import { History, LoginPage, Progress, RegisterPage, Settings } from "./pages";
import { NavBar } from './components'

const App = () => {
  return(
  <>
    <NavBar />
    <Routes>
      {/* <Route exact path='/'><Home /></Route> */}
      {/* <Route path='/login'><LoginPage/></Route> */}
      {/* <Route path='/register'><RegisterPage /></Route> */}
      <Route path='/history'><History /></Route>
      <Route path='/progress'><Progress /></Route>
      <Route path='/settings'><Settings /></Route>
    </Routes>
  </>
)};

export default App;
