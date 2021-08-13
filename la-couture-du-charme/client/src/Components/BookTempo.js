import '../CSS/BookTempo.css';
import React from 'react';
// import React, { useState } from 'react';




export default function BookTempo(){

    window.scrollTo(0, 0);

    // const [chambre, setChambres]=useState(false);
    // const [spa, setSpa]=useState(false);

    // const [phase, setPhase] = useState(0);
    // const [people, setPeople] = useState(0);
    // const [dateDébut, setDateDébut] = useState(' ');
    // const [dateFin, setDateFin] = useState(' ');



    // const Test = (val,val1,val2) => {
        
    
    //     setPhase(val)
        
    //     if (val===1){
    //         setChambres(true)
    //     }
    //     if (val===2){
    //         setSpa(true)
    //     }

    //     if (val===3){
    //         setPeople(val1)
    //     }

    //     if(val===4){
    //         setPeople(val1)
    //     }
    //     if (val===5){
    //         setDateDébut(val1)
    //         setDateFin(val2)
    //     }
        
        
    //     if (val===10){
    //         setDateDébut(val1)
    //         setDateFin(val2)
    //     }

    //     if (val===11){
    //         if(val1===true){
    //             setSpa(true)

    //         }
    //     }

        
    

    // }

    return(
        <div className="containerBookTempo">
            <div className="container2BookTempo">
                <p className="textBookTempo">La réservation en ligne arrive prochainement.
                </p>
                <p className="textBookTempo">N'hésitez pas à nous appeler au 07 52 09 07 50 pour faire votre réservation ou pour plus d'informations.</p>
            </div>
        </div>
    )
}




