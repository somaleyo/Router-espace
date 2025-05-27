import { useState } from 'react'
import Nav from '../components/Nav'
import './tech.css'
import { Link, Outlet } from 'react-router-dom'
Outlet
export default function Tech(props) {
    
const[one,setOne]=useState(true)
const[two,setTwo]=useState(false)
const[trois,setTrois]=useState(false)

    return(
        <>
            <div className="tech-bg">
                <Nav/>
                <div className="tech">
                    <h6><span className='num'>01</span> PICK YOUR DESTINATION</h6>
                    <div className="tech-container">
                        <div className="tech-left">
                            <div className="tech-ancre">
                             <Link to="/technology" className={one? "active-tech":"one"}> <span>1</span></Link>  
                                <Link to="spaceport" className={two? "active-tech":"one"}><span>2</span></Link>
                                <Link to="capsule" className={trois? "active-tech":"one"}><span>3</span></Link>
                            </div>
                            <Outlet/>
                         
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}