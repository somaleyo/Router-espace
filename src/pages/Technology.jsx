import { useState,useEffect } from 'react'
import Nav from '../components/Nav'
import './tech.css'
import { Link, Outlet } from 'react-router-dom'
Outlet
export default function Tech( {active,setactive}) {
    
const[actif,setActif]=useState(1)
 useEffect(()=>{
    setactive("technology")
 },[])

    return(
        <>
            <div className="tech-bg">
                <Nav active={active}setactive={setactive}/>
                <div className="tech">
                    <h6><span className='num'>01</span> PICK YOUR DESTINATION</h6>
                    <div className="tech-container">
                        <div className="tech-left">
                            <div className="tech-ancre">
                             <Link to="/technology" className={`one ${actif ===1 ? "active-tech" : ""}`}onClick={()=>{setActif(1)}}> <span >1</span></Link>  
                                <Link to="spaceport" className={`one ${actif ===2 ? "active-tech" : ""}`}onClick={()=>{setActif(2)}}><span >2</span></Link>
                                <Link to="capsule" className={`one ${actif ===3 ? "active-tech" : ""}`}onClick={()=>{setActif(3)}}><span >3</span></Link>
                            </div>
                            <Outlet/>
                         
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}