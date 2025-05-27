import { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


export default function Nav(props) {
    
    const[ishome,setIshome]=useState(true)
    const[isdest,setIsdest]=useState(false)
    const[iscrew,setIscrew]=useState(false)
    const[istech,setIstech]=useState(false)



    return(
        <>
            <nav>
                <img className='logo' src="/src/assets/images/assets/shared/logo.svg" alt="" />
                <div className="tiret"></div>
                <div className="ancres">
                <Link className='ancre' to={"/"}> <p className={ishome? "active ancre":"ancre"}><span>00</span> HOME</p></Link>   
                  <Link className='ancre' to={"/destination"}><p className={isdest? "active2 ancre":"ancre"}><span>01</span> DESTINATION</p></Link>   
                   <Link className='ancre' to={"/crew"}><p className={iscrew? "active ancre":"ancre"}><span>02</span> CREW</p></Link>   
                   <Link className='ancre' to={"/technology"}><p className={istech? "active2 ancre":"ancre"}><span>03</span> TECHNOLOGY</p></Link>   
                </div>
            </nav>
        </>
    )
}