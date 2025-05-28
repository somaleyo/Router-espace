import { Link, Outlet } from 'react-router-dom'
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
                           

                        </div>
                        <div className="destination-droite">
                            <div className="planete-ancre">
                              <Link to={'/destination'} className={actif===1? "planete-active link":"link"} onClick={()=>{setActif(1)}}><p >MOON</p></Link> 
                              <Link to={'mars'} className={actif===2? "planete-active link":"link"} onClick={()=>{setActif(2)}}><p  >MARS</p></Link>  
                             <Link to={"europa"} className={actif===3? "planete-active link":"link"} onClick={()=>{setActif(3)}}>   <p >EUROPA</p></Link>
                                <Link to={"titan"} className={actif===4? "planete-active link":"link"} onClick={()=>{setActif(4)}}><p >TITAN</p></Link>
                            </div>
                            <Outlet/>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}