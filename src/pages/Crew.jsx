import { useEffect, useState } from 'react'
import './crew.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Crew(props) {
    

    return(
        <>
            <div className="crew-bg">
                <Nav/>
                <div className="crew">
                    <h6><span className='num'>02</span> MEET YOUR CREW</h6>
                </div>
            </div>
        </>
    )
}