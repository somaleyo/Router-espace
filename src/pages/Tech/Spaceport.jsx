import { useState } from 'react'

import '../tech.css'
import { Link, Outlet } from 'react-router-dom'
import Nav from '../../components/Nav'

export default function Spaceport(props) {
    


    return(
        <>
          
          
          <div className="tech-container">
                   <div className="tech-text">
                                <h5>THE TERMINOLOGY...</h5>
                                <h2>SPACEPORT</h2>
                                <p className='texte'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                            by analogy to the seaport for ships or airport for aircraft. Based in the 
                            famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                            of the Earth’s rotation for launch.</p>
                            </div>
                            <div className="tech-right">
                            <img src="/src/assets/images/assets/technology/image-spaceport-portrait.jpg" alt="" />
                        </div>

            </div>

        
           
        </>
    )
}