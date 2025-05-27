
import { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Explore from '../components/Explore'

export default function Home(props) {
    



return(
    <>
        <div className="home-container">
            <Nav/>
            <Explore/>
        </div>
    </>
    )
}