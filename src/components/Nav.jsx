import { useEffect, useState } from 'react'
import './nav.css'

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
                    <p className={ishome? "active":""}><span>00</span> HOME</p>
                    <p className={isdest? "active2":""}><span>01</span> DESTINATION</p>
                    <p className={iscrew? "active":""}><span>02</span> CREW</p>
                    <p className={istech? "active2":""}><span>03</span> TECHNOLOGY</p>
                </div>
            </nav>
        </>
    )
}