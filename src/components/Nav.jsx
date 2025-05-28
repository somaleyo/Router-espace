import { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import logo from "/src/assets/images/assets/shared/logo.svg"
import close from "/src/assets/images/assets/shared/icon-close.svg"
import burger from "/src/assets/images/assets/shared/icon-hamburger.svg"
export default function Nav({active,setactive}) {
    
    const[open,setOpen]=useState(false)
    
    const toggleMenu = () => {
        setOpen(!open)
    }

    return(
        <>
            <nav>
                <Link to={"/"} className="link ">
                    <img className='logo' src={logo} alt="" />
                </Link>  
                
                {/* Menu Burger */}
                <div className="burger-menu" onClick={toggleMenu}>
                    <img 
                        src={open ? {close} : {burger}} 
                        alt={open ? "Close menu" : "Open menu"}
                        className="burger-icon"
                    />
                </div>
                
                <div className="tiret"></div>
                
                <div className={`ancres ${open ? 'ancres-open' : ''}`}>
                    <Link className='ancre' to={"/"} onClick={() => setOpen(false)}> 
                        <p className={active==="home"? "active ancre":"ancre"}>
                            <span>00</span> HOME
                        </p>
                    </Link>   
                    <Link className='ancre' to={"/destination"} onClick={() => setOpen(false)}>
                        <p className={active ==="destination"? "active2 ancre":"ancre"}>
                            <span>01</span> DESTINATION
                        </p>
                    </Link>   
                    <Link className='ancre' to={"/crew"} onClick={() => setOpen(false)}>
                        <p className={active==="crew"? "active ancre":"ancre"}>
                            <span>02</span> CREW
                        </p>
                    </Link>   
                    <Link className='ancre' to={"/technology"} onClick={() => setOpen(false)}>
                        <p className={active==="technology"? "active2 ancre":"ancre"}>
                            <span>03</span> TECHNOLOGY
                        </p>
                    </Link>   
                </div>
            </nav>
        </>
    )
}