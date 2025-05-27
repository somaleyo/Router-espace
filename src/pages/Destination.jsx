import { Link } from 'react-router-dom'
import './destination.css'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'


export default function Destination({active,setactive}) {
    useEffect(()=>{
        setactive("destination")
    },[])
    const [actif,setActif]=useState(1)

    return(
        <>
            <div className="destination-container">
                <Nav active={active}setactive={setactive}/>
                <div className="destination">
                    <h6><span className='num'>01</span> PICK YOUR DESTINATION</h6>
                    <div className="destination-content">
                        <div className="destination-gauche">
                            <img className='planete' src="/src/assets/images/destination/moon.png" alt="" />

                        </div>
                        <div className="destination-droite">
                            <div className="planete-ancre">
                                <p className={actif===1? "planete-active":""}>MOON</p>
                                <p  className={actif===2? "planete-active":""}>MARS</p>
                                <p className={actif===3? "planete-active":""}>EUROPA</p>
                                <p className={actif===4? "planete-active":""}>TITAN</p>

                            </div>
                            <h1>MOON</h1>
                            <p className='text'>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.
                                While you're there, take in some history by visitin the Luna 2 and Apollo 11 landing sites.
                                
                            </p>
                                <hr  className='dest'/>
                            <div className="bottom-dest">
                            
                            <p><span className="traveltime">EST.TRAVEL TIME</span></p>
                            <h5>3 DAYS</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}