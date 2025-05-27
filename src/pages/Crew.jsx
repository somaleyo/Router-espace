import { useEffect, useState } from 'react'
import './crew.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Crew({active,setactive}) {
 const[actif,setActif]=useState(1)
 useEffect(()=>{
    setactive("crew")
 },[])

    return(
        <>
            <div className="crew-bg">
                <Nav active={active}setactive={setactive}/>
                <div className="crew">
                    <h6><span className='num'>02</span> MEET YOUR CREW</h6>
                    <div className="crew-container">
                    <div className="crew-left">
                        <h4>COMMANDER</h4>
                        <h3>DOUGLAS HURLEY</h3>
                        <p className='text'>Douglas Gerald Hurly is and American engineer, former marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
                        <span className={actif===1? 'active-point ':'point'}>.</span>
                        <span className={actif===2? 'active-point ':'point'}>.</span>
                        <span className={actif===3? 'active-point ':'point'}>.</span>
                        <span className={actif===4? 'active-point ':'point'}>.</span>
                    </div>
                    <div className="crew-right">
                        <img className='foto' src="/src/assets/images/assets/crew/image-douglas-hurley.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}