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
      <Route path='/history' element={<History />}/>
      <Route path='/progress' element={<Progress />}/>
      <Route path='/settings' element={<Settings />}/>
    </Routes>
  </>
)};

export default App;
