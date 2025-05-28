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
import Vehicle from './pages/Tech/Vehicle'
import Moon from './pages/Destination/Moon'
import Mars from './pages/Destination/Mars'
import Titan from './pages/Destination/Titan'
import Europa from './pages/Destination/Europa'
import { Mark } from './pages/Crew/Mark'



function App() {
  const[active,setActive]=useState("home")

  return (
    <>
      <Routes>
      <Route path='/' index element={<Home active={active}setactive={setActive}/>}/>
      <Route path='/destination' element={<Destination active={active}setactive={setActive}/>}>
        <Route index element={<Moon/>}/>
        <Route path='mars' element={<Mars/>}/>
        <Route path='europa' element={<Europa/>}/>
        <Route path='titan' element={<Titan/>}/>
      </Route>

      <Route path='/crew' element={<Crew active={active}setactive={setActive}/>}/>
      <Route path='/technology'  element={<Tech active={active}setactive={setActive}/>}>
        <Route index element={<Vehicle/>}/>
        <Route path='capsule' element={<Capsule/>}/>
        <Route path='spaceport' element={<Spaceport/>}/>
      </Route>
      
      <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
