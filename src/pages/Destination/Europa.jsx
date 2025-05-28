import euro from "/src/assets/images/destination/europa.png"
export default function Europa() {
    

    return(
        <>
            <div className="destination-content">
         <div className="destination-gauche">
                            <img className='planete' src={euro} alt="" />

                        </div>
            <div className="destination-droite">
                <h1>EUROPA</h1>
                            <p className='text'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.
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