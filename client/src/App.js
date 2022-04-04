import React from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';


import { History, LoginPage, Progress, RegisterPage, Settings, ProgramsPage } from "./pages";
import { NavBar } from './components'

const App = () => {
  
  let location = useLocation()
  
  // let showNav = 
  return(
  <>
    <Routes>
      {/* <Route path='/home' element={<Home />}/> */}
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='register' element={ <RegisterPage /> }/>
        <Route path='programs' element={ <ProgramsPage/> }/>
        <Route path='history' element={ <History /> }/>
        <Route path='progress' element={ <Progress /> }/>
        <Route path='settings' element={ <Settings />}/>
    </Routes>
    {location.pathname === ('/login' || '/register') ? null : <NavBar />}
  </>
)};

export default App;
