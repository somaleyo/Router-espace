import { useEffect, useState } from 'react'
import './crew.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Crew(props) {
    const[one,setOne]=useState(true)
    const[two,setTwo]=useState(false)
    const[trois,setTrois]=useState(false)
    const[four,setFour]=useState(false)

    return(
        <>
            <div className="crew-bg">
                <Nav/>
                <div className="crew">
                    <h6><span className='num'>02</span> MEET YOUR CREW</h6>
                    <div className="crew-container">
                    <div className="crew-left">
                        <h4>COMMANDER</h4>
                        <h3>DOUGLAS HURLEY</h3>
                        <p className='text'>Douglas Gerald Hurly is and American engineer, former marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
                        <span className={one? 'active-point ':'point'}>.</span>
                        <span className={two? 'active-point ':'point'}>.</span>
                        <span className={trois? 'active-point ':'point'}>.</span>
                        <span className={four? 'active-point ':'point'}>.</span>
                    </div>
                    <div className="crew-right">
                        <img className='foto' src="/src/assets/images/assets/crew/image-douglas-hurley.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}