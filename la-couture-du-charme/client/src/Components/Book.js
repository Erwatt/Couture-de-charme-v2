import '../css/book.css';
import React, { useState } from 'react';




export default function Book(){

    window.scrollTo(0, 0);

    const [chambre, setChambres]=useState(false);
    const [spa, setSpa]=useState(false);

    const [phase, setPhase] = useState(0);
    const [people, setPeople] = useState(0);
    const [dateDébut, setDateDébut] = useState(' ');
    const [dateFin, setDateFin] = useState(' ');



    const Test = (val,val1,val2) => {
        
    
        setPhase(val)
        
        if (val===1){
            setChambres(true)
        }
        if (val===2){
            setSpa(true)
        }

        if (val===3){
            setPeople(val1)
        }

        if(val===4){
            setPeople(val1)
        }
        if (val===5){
            setDateDébut(val1)
            setDateFin(val2)
        }
        
        
        if (val===10){
            setDateDébut(val1)
            setDateFin(val2)
        }

        if (val===11){
            if(val1===true){
                setSpa(true)

            }
        }

        
    

    }

    return(
        <div className="containerBook">

            <div className="headerBook"><p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas. </p></div>

            <div className="containerForm">
                <div className="formHeader"><h3>Lorem ipsum dolor sit amet</h3></div>
                
                    {phase===0?
                        <div className="containerButtonChoix"><div className="buttonChoix" onClick={()=>Test(1)}>Je veux une chambre</div><div className="buttonChoix" onClick={()=>Test(2)}>Je ne viens que pour le centre de détente</div></div>
                    :false}
                    {phase<=1 ?
                        <div className="containerButtonChoix">
                            <div className="buttonChoix2" id="hoverNone" >Pour combien de personne ? </div>
                            
                            <input type="number" id="personnes" name="personnes" min="1" max="100"></input>
                            <div className="buttonChoix2" onClick={()=>Test(3,document.getElementById("personnes").value)}>Valider</div>
                            
                        </div>
                    :false}
                    {
                        phase===2?<div className="containerButtonChoix">
                        <div className="buttonChoix2" id="hoverNone" >Pour combien de personne ? </div>
                        
                        <input type="number" id="personnes" name="personnes" min="1" max="100"></input>
                        <div className="buttonChoix2" onClick={()=>Test(4,document.getElementById("personnes").value)}>Valider</div>
                        
                    

                        </div>:false
                    }

                    {
                        phase<=3?
                        <div className="containerButtonChoix">
                               <div className="buttonChoix2" id="hoverNone" >
                               <p>Du</p>
                                   <input  type="datetime-local" id="dated" name="personnes" min="1" max="100"></input>
                                   <p>Au</p>
                                    <input  type="datetime-local" id="datef" name="personnes" min="1" max="100"></input>
                               </div>
                               <div className="buttonChoix2" id ="buttonNextDate" onClick={()=>Test(5,document.getElementById("dated").value,document.getElementById("datef").value)}>Valider</div>


                        </div>
                        :false
                    }

                    {phase<=4?
                    <div className="containerButtonChoix" id="">
                        <div className="buttonChoix2" id="hoverNone" >
                            <p>Du</p>
                            <input  type="datetime-local" id="dated" name="personnes" min="1" max="100"></input>
                            <p>Au</p>
                            <input  type="datetime-local" id="datef" name="personnes" min="1" max="100"></input>
                        </div>
                        <div className="buttonChoix" id ="buttonNextDate" onClick={()=>Test(10,document.getElementById("dated").value,document.getElementById("datef").value)}>Valider</div>
                    </div>
                    
                    :false}
                    {phase<=5?
                    <div className="containerButtonChoix">
                        <div className="buttonChoix2" id="hoverNone">Etes-vous intérésser par le centre de détente ?</div>
                        <div className="buttonChoix" onClick={()=>Test(11,true)}>Oui</div>
                        <div className="buttonChoix" onClick={()=>Test(11,false)}>Non</div>
                    </div>
                    :false}

                    {phase===10||phase===11?
                    <div>                            
                        <div>Récapitulatif</div>
                        <div>{chambre===true?<>chambre</>:false} {spa===true?<>spa</>:false} for {people} from {dateDébut} to  {dateFin}</div>




                    </div>
                    


                    :false}
                

            </div>
        </div>
    )
}




