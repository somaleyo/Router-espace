import victor from "/src/assets/images/assets/crew/image-victor-glover.png"
export function Victor(params) {
    

    return(
        <>
              <div className="crew">
             <div className="crew-container">
                    <div className="crew-left">
                        <h4>PILOT</h4>
                        <h3>VICTOR GLOVER</h3>
                        <p className='text'> Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. </p>
                        </div>
                        <div className="crew-right">
                        <img className='foto' src={victor} alt="" />
                        
                        </div>
                    </div>
                   </div>
        </>
    )
}