import { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


export default function Nav({active,setactive}) {
    
   



    return(
        <>
            <nav>
              <Link to={"/"} className="link "><img className='logo' src="/src/assets/images/assets/shared/logo.svg" alt="" /></Link>  
                <div className="tiret"></div>
                <div className="ancres">
                <Link className='ancre' to={"/"}> <p className={active==="home"? "active ancre":"ancre"}><span>00</span> HOME</p></Link>   
                  <Link className='ancre' to={"/destination"}><p className={active ==="destination"? "active2 ancre":"ancre"}><span>01</span> DESTINATION</p></Link>   
                   <Link className='ancre' to={"/crew"}><p className={active==="crew"? "active ancre":"ancre"}><span>02</span> CREW</p></Link>   
                   <Link className='ancre' to={"/technology"}><p className={active==="technology"? "active2 ancre":"ancre"}><span>03</span> TECHNOLOGY</p></Link>   
                </div>
            </nav>
        </>
    )
}