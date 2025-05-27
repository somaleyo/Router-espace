import { useState } from 'react'
import Nav from '../components/Nav'
import './tech.css'

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
                                <span className={one? "active-tech":"one"}>1</span>
                                <span className={two? "active-tech":"one"}>2</span>
                                <span className={trois? "active-tech":"one"}>3</span>
                            </div>
                            <div className="tech-text">
                                <h5>THE TERMINOLOGY...</h5>
                                <h2>LAUNCH VEHICLE</h2>
                                <p className='texte'> A launch vehicle or carrier rocket is a rocket- ropelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad !</p>

                            </div>
                        </div>
                        <div className="tech-right">
                            <img src="/src/assets/images/assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}