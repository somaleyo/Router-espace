import { useState,useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Tech from './pages/Technology'



function App() {
  

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/destination' element={<Destination/>}></Route>
      <Route path='/crew' element={<Crew/>}></Route>
      <Route path='/technology' element={<Tech/>}></Route>
      </Routes>
    </>
  )
}

export default App
