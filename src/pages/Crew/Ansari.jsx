import ansari from "/src/assets/images/assets/crew/image-anousheh-ansari.png"
export function Ansari(params) {
    

    return(
        <>
              <div className="crew">
             <div className="crew-container">
                    <div className="crew-left">
                        <h4>FLIGHT INEER</h4>
                        <h3>ANOUSHEH ANSARI</h3>
                        <p className='text'>
  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. </p>
                        </div>
                        <div className="crew-right">
                        <img className='foto' src={ansari} alt="" />
                        
                        </div>
                    </div>
                   </div>
        </>
    )
}