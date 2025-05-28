export default function Mars() {
    

    return(
        <>
            <div className="destination-content">
         <div className="destination-gauche">
                            <img className='planete' src="/src/assets/images/destination/moon.png" alt="" />

                        </div>
            <div className="destination-droite">
                <h1>MOON</h1>
                            <p className='text'>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.
                                While you're there, take in some history by visitin the Luna 2 and Apollo 11 landing sites.
                                
                            </p>
                                <hr  className='dest'/>
                            <div className="bottom-dest">
                            
                            <p><span className="traveltime">EST.TRAVEL TIME</span></p>
                            <h5>3 DAYS</h5>
                            </div>
            </div>
            </div>
        </>
    )
}