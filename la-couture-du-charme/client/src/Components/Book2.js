import '../CSS/Book2.scss';
import React, { useState } from 'react';
import { InlineWidget, PopupWidget,CalendlyEventListener,PopupButton} from "react-calendly";
import imgRoom from '../Images/chambre.jpeg'




export default function Book(){

const[bookRoom,setBookRoom]=useState(false)
const[bookSpa,setBookSpa]=useState(false)
const[semaine,setSemaine]=useState(false)
const[weekend,setWeekend]=useState(false)
const[before17,setBefore17]=useState(false)
const[after17,setAfter17]=useState(false)
const[nombre,setNombre]=useState(0)
const[validate,setvalidate]=useState(false)
const[creneau2h,setCreneau2h]=useState(false)
const[creneau1h30,setCreneau1h30]=useState(false)


const BookRoom = () => {
    setBookRoom(true)
    setBookSpa(false)
}
const BookSpa = () => {
    setBookSpa(true)
    setBookRoom(false)
}
const BookWeekend = ()=>{
    if (weekend){setWeekend(false)}
    else{setWeekend(true)}
    setSemaine(false)
    setAfter17(false)
    setBefore17(false)
    setNombre(document.getElementById("nombre").value)
    
    

}
const BookSemaine = ()=>{
    if (semaine){setSemaine(false)}
    else{setSemaine(true)}
    setWeekend(false)
    setAfter17(false)
    setBefore17(false)
    setNombre(document.getElementById("nombre").value)
}
const BookBefore17 = ()=>{
    if(before17){setBefore17(false)}
    else{setBefore17(true)}
    setAfter17(false)
    setNombre(document.getElementById("nombre").value)
}
const BookAfter17 = ()=>{
    setBefore17(false)
    if(after17){setAfter17(false)}
    else{setAfter17(true)}
    setNombre(document.getElementById("nombre").value)
}

const Creneau2h = ()=>{
    setCreneau1h30(false)
    if(creneau2h){setCreneau2h(false)}
    else{setCreneau2h(true)}
    setNombre(document.getElementById("nombre").value)
}
const Creneau1h30h = ()=>{
    setCreneau2h(false)
    if(creneau1h30){setCreneau1h30(false)}
    else{setCreneau1h30(true)}
    setNombre(document.getElementById("nombre").value)
}

const Validate = ()=>{
    setNombre(document.getElementById("nombre").value)
    if(nombre<1||nombre>8){setvalidate(false)}
    else{
        if (semaine===false&&weekend===false){setvalidate(false)}
        else{
            if(semaine&&after17===false&&before17===false){setvalidate(false)}
            else{
                if(semaine&&after17&&creneau2h===false&&creneau1h30===false){setvalidate(false)}
                else{setvalidate(true)}
            }
        }
    }
    
}



    return(
        <div>
            {
                validate?
                <div>
                    {
                        nombre==1||nombre==2?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?
                                        <div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-semaine-1h30-2" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                            
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?
                                                <div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-de-semaine-1ou2-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                    
                                                </div>:
                                                <div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-1-ou-2-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-weekend-1-ou-2-pers" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }
                        </div>:false
                    }
                    {
                        nombre==3?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?<div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-semaine-1h30-3" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?
                                                <div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-de-semaine-3-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                                </div>:
                                                <div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-de-semaine-3-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-we-3" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }
                        </div>:false
                    }
                    {
                        nombre==4?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?<div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-4personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?
                                                <div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-de-semaine-4-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>

                                                </div>:<div>
                                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-de-semaine-4-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-weekend-4-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }

                        </div>:false
                    }
                    {
                        nombre==5?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?<div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-semaine-5-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?<div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-semaine-5-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                                </div>:<div>
                                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-de-semaine-5-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-weekend-5-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }
                        </div>
                        :false
                    }
                    {
                        nombre==6?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?<div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-semaine-6-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?<div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-de-semaine-6-personne" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                                </div>:<div>
                                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-de-semaine-6-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-weekend-6-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }
                        </div>
                        :false
                    }
                    {
                        nombre==7?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?<div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-semaine-7-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?<div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-de-semaine-7-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                                </div>:<div>
                                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-de-semaine-7-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-weekend-7-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }
                        </div>
                        :false
                    }
                    {
                        nombre==8?
                        <div>
                            {
                                semaine?<div>
                                    {
                                        before17?<div>
                                            <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-semaine-8-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                        </div>:
                                        <div>
                                            {
                                                creneau1h30?<div>
                                                    <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-1h30-soir-de-semaine-8-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                                </div>:<div>
                                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-soir-de-semaine-8-personnes" 
                                                pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '00a2ff',
                                                textColor: '4d5055'
                                            }}/>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>:<div>
                                <InlineWidget url="https://calendly.com/spa-lacoutureducharme/creneau-spa-2h-weekend-8-personnes" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: false,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                                }}/>
                                </div>
                            }
                        </div>
                        :false
                    }
                </div>
                :
                <div >
                    { (bookRoom ===false)&&(bookSpa===false)?
                
                <div className="containerButtonBook">
                    <p className="buttonBook" id="bookRoom" onClick={()=>BookRoom()}>Réservation des chambres</p>
                    <p className="buttonBook" id="bookSpa" onClick={()=>BookSpa()}>Réservation du centre de détente</p>
                </div>

                :
                    <div>
                        {
                            bookRoom?
                                <div className="containerBookRoom">
                                    <iframe  height='600' width='100%' src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=resa&nbmois-ligne=1' ></iframe>

                                </div>
                            :false
                        }
                        {
                            bookSpa?
                                <div className="containerBookSpa" id="containerBook">
                                    <div className="containerFormSpa">
                                        <div className="elementForm">
                                            <div>Pour combien de personnes ? (max : 8 personnes)</div>
                                            <input type="number" id="nombre"  min="1" max="8"/>
                                           

                                        </div>
                                        <div className="elementForm">
                                            {
                                                semaine?<p className="buttonChoiceWeekendClicked"  onClick={()=>BookSemaine()}>En semaine</p>:<p className="buttonChoiceWeekend" onClick={()=>BookSemaine()}>En semaine</p>
                                            }
                                            {
                                                weekend? <p className="buttonChoiceWeekendClicked" onClick={()=>BookWeekend()}>Le weekend</p>: <p className="buttonChoiceWeekend" onClick={()=>BookWeekend()}>Le weekend</p>
                                            }
                                           
                                        </div>

                                        {
                                            semaine?
                                            <div className="elementForm">
                                                {
                                                    before17?<p className="buttonChoice17hClicked" onClick={()=>BookBefore17()}>Avant 17 h</p>:<p className="buttonChoice17h" onClick={()=>BookBefore17()}>Avant 17 h</p> 
                                                }
                                                {
                                                    after17?<p className="buttonChoice17hClicked" onClick={()=>BookAfter17()}>Après 17h</p>:<p className="buttonChoice17h" onClick={()=>BookAfter17()}>Après 17h</p>
                                                }
                                                
                                            </div>
                                            :false
                                        }
                                        {
                                            after17?
                                            <div className="elementForm">
                                                {
                                                    creneau1h30?<p className="buttonChoice17hClicked" onClick={()=>Creneau1h30h()}>Créneau 1h30</p>:<p className="buttonChoice17h" onClick={()=>Creneau1h30h()}>Créneau 1h30</p> 
                                                }
                                                {
                                                    creneau2h?<p className="buttonChoice17hClicked" onClick={()=>Creneau2h()}>Créneau 2h</p>:<p className="buttonChoice17h" onClick={()=>Creneau2h()}>Créneau 2h</p>
                                                }
                                                
                                            </div>
                                            :false
                                        }
                                        
                                        <div className="elementForm">
                                            <p className="validateBtn" onClick={()=>Validate()} onMouseOver={()=>setNombre(document.getElementById("nombre").value)}>Valider</p>
                                        </div>
                                        
                                    </div>                                 

                                </div>
                            :false
                        }
                    </div>
                }
                </div>

                
            }
                
               
            
        </div>
    

    

    )
}