import { useEffect, useState } from 'react'
import './crew.css'
import { Link, Outlet } from 'react-router-dom'
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
                
                        <Outlet/>
                    <div className="crew-left crew-ancre">

                        <Link to={"/crew"}  className={actif===1? 'link active-point ':'link point'} onClick={()=>{setActif(1)}}><span>.</span></Link>
                        <Link to={"victor"} className={actif===2? 'link active-point ':'link point'}onClick={()=>{setActif(2)}}><span >.</span></Link>
                     <Link to={"mark"} className={actif===3? 'link active-point ':'link point'}onClick={()=>{setActif(3)}}><span >.</span></Link>
                      <Link to={"ansari"} className={actif===4? 'link active-point ':'link point'}onClick={()=>{setActif(4)}}><span >.</span></Link>
                    </div>
                    
                  
                    </div>
                </div>
            
        </>
    )
}