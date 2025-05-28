import mark from "/src/assets/images/assets/crew/image-mark-shuttleworth.png"
export function Mark(params) {
    

    return(
        <>
              <div className="crew">
             <div className="crew-container">
                    <div className="crew-left">
                        <h4>MISSION SPECIALIST</h4>
                        <h3>MARK SHUTTLEWORTH</h3>
                        <p className='text'>  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.</p>
                        </div>
                        <div className="crew-right">
                        <img className='foto' src={mark} alt="" />
                        
                        </div>
                    </div>
                   </div>
        </>
    )
}