import { useState,useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'


function App() {
  

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/destination' element={<Destination/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
