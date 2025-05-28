import vehicle from "/src/assets/images/assets/technology/image-launch-vehicle-portrait.jpg"
export default function Vehicle(params) {
    

    return(
        <>
            <div className="tech-container">
                   <div className="tech-text">
                                <h5>THE TERMINOLOGY...</h5>
                                <h2>LAUNCH VEHICLE</h2>
                                <p className='texte'> A launch vehicle or carrier rocket is a rocket- ropelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad !</p>

                            </div>
                            <div className="tech-right">
                            <img src={vehicle} alt="" />
                        </div>

            </div>
        </>
    )
}