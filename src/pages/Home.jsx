
import { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Explore from '../components/Explore'

export default function Home({active,setactive}) {
    
useEffect(()=>{
    setactive("home")
},[])


return(
    <>
        <div className="home-container">
            <Nav active={active}setactive={setactive}/>
            <Explore/>
        </div>
    </>
    )
}