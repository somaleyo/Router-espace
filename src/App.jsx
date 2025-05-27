import { useState,useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Tech from './pages/Technology'
import Error from './pages/Error'
import Spaceport from './pages/Tech/Spaceport'
import Capsule from './pages/Tech/Capsule'




function App() {
  

  return (
    <>
      <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology'  element={<Tech/>}>
        <Route path='capsule' element={<Capsule/>}/>
        <Route path='vehicle' element={<Vehicle/>}/>
        <Route path='spaceport' element={<Spaceport/>}/>
      </Route>
      
      <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
