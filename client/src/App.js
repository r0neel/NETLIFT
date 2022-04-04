import React from 'react';
import {  Route, Routes } from 'react-router-dom';


import { History, LoginPage, Progress, RegisterPage, Settings } from "./pages";
import { NavBar } from './components'

const App = () => {
  // const visNav = () => {
  //   return (
  //   <>
  //     <Routes>
  //       <Route path='history' element={<History />}/>
  //       <Route path='progress' element={<Progress />}/>
  //       <Route path='settings' element={<Settings />}/>
  //     </Routes>
  //     <NavBar />
  //   </>
  //   )
  // }

  return(
  <>
    <Routes>
      {/* <Route path='/home' element={<Home />}/> */}
      <Route path='login' element={<LoginPage />}/>
      <Route path='register' element={<RegisterPage />}/>
      <Route path='history' element={<><History /> <NavBar /></>}/>
      <Route path='progress' element={<><Progress /> <NavBar /></>}/>
      <Route path='settings' element={<><Settings /> <NavBar /></>}/>

    </Routes>
  </>
)};

export default App;
