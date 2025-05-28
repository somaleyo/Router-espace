import mars from "/src/assets/images/destination/mars.png"
export default function Mars() {
    

    return(
        <>
            <div className="destination-content">
         <div className="destination-gauche">
                            <img className='planete' src={mars} alt="" />

                        </div>
            <div className="destination-droite">
                <h1>MARS</h1>
                            <p className='text'>  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!
                            </p>
                                <hr  className='dest'/>
                            <div className="bottom-dest">
                            
                            <p><span className="traveltime">EST.TRAVEL TIME</span></p>
                            <h5>9 MONTHS</h5>
                            </div>
            </div>
            </div>
        </>
    )
}