import '../CSS/Book2.scss';
import React, { useState } from 'react';
import détente from '../Images/centrededétente.jpeg'
import { InlineWidget, PopupWidget,CalendlyEventListener,PopupButton} from "react-calendly";
import imgRoom from '../Images/chambre.jpeg'
import logoCouture from '../Images/logo.png'
import HomeBook2 from './HomeBook2'



export default function BookSpa(){
    window.scrollTo(0, 0);
    
    const[semaine,setSemaine]=useState(false)
    const[weekend,setWeekend]=useState(false)
    const[before17,setBefore17]=useState(false)
    const[after17,setAfter17]=useState(false)
    const[nombre,setNombre]=useState(0)
    const[validate,setvalidate]=useState(false)
    const[creneau2h,setCreneau2h]=useState(false)
    const[creneau1h30,setCreneau1h30]=useState(false)
    const[creneau,setCreneau]=useState("Créneau Spa")
    const[prix, setPrix]=useState(30)

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
                    else{
                        if(semaine){
                            
                            if(after17){
                                if(creneau1h30){
                                    setCreneau("Créneau Spa - " +" Semaine - "+nombre.toString()+ " personne(s)" +" - 1h30")
                                    if(nombre==1||nombre==2){setPrix(90)}
                                    else{setPrix(90+(nombre-2)*20)}
                            }
                                else{
                                    setCreneau(" Créneau Spa - Semaine - " +nombre.toString()+ " personne(s)" +" - 2h")
                                    if(nombre==1||nombre==2){setPrix(110)}
                                    else{setPrix(110+(nombre-2)*30)}                            }
                            }
                            else{
                                setCreneau("Créneau Spa - Semaine - " +nombre.toString()+ " personne(s)")
                                if(nombre==1||nombre==2){setPrix(80)}
                                else{setPrix(20+(nombre-2)*20)}                        }
                                
                        }
                        else{
                            setCreneau("Créneau Spa - Weekend - " +nombre.toString()+ " personne(s)")
                            if(nombre==1||nombre==2){setPrix(130)}
                            else{setPrix(130+(nombre-2)*20)}                    }
    
    
                        
    
    
                        
                        setvalidate(true)
                        
                    
                    }
                }
            }
        }
        
    }



    return(
        

        
    <div>
        {
            validate?
            <div className="containerPageCalendar">
                {
                    semaine?
                    <div>
                        {
                        before17?
                        <div className="calendarContainer">
                            <div className="containerLeft">
                                <div className="logoCoutureContainer">
                                    <img src={logoCouture} className="logoCouture"></img>
                                </div>
                                <div className="creneauText">{creneau}</div>
                                <div className="messageText">Délassez vous dans l'espace piscine sauna spa, seul ou à plusieurs, en semaine avant 17h.</div>
                                <div className="priceText">€{prix} EUR</div>
                            </div >
                            <div className="calendar">
                                <InlineWidget url="https://calendly.com/coutureducharme-le-spa/creneau-spa-1h30-journee-semaine" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: false,
                                            hideLandingPageDetails: false,
                                            primaryColor: '00a2ff',
                                            textColor: '4d5055'
                                }}/>
                            </div>
                        </div>
                        :
                        <div>
                            {
                            creneau1h30?
                                <div className="calendarContainer">
                                    <div className="containerLeft">
                                        <div className="logoCoutureContainer">
                                            <img src={logoCouture} className="logoCouture"></img>
                                        </div>
                                        <div className="creneauText">{creneau}</div>
                                        <div className="messageText">Délassez vous dans l'espace piscine sauna spa, seul ou à plusieurs, en semaine après 17h.</div>
                                        <div className="priceText">€{prix} EUR</div>
                                    </div >
                                    <div className="calendar">
                                        <InlineWidget  url="https://calendly.com/coutureducharme-le-spa/creneau-spa-1h30-soir-de-semaine" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: true,
                                            primaryColor: '00a2ff',
                                            textColor: '4d5055'
                                        }}
                                        styles={{
                                            width:"300px",
                                            height:"600px"


                                          }}

                                        />
                                    </div>
                                </div>
                                :
                                <div className="calendarContainer">
                                    <div className="containerLeft">
                                        <div className="logoCoutureContainer">
                                            <img src={logoCouture} className="logoCouture"></img>
                                        </div>
                                        <div className="creneauText">{creneau}</div>
                                        <div className="messageText">Délassez vous dans l'espace piscine sauna spa, seul ou à plusieurs, en semaine après 17h.</div>
                                        <div className="priceText">€{prix} EUR</div>
                                    </div >
                                    <div className="calendar">
                                        <InlineWidget url="https://calendly.com/coutureducharme-le-spa/creneau-spa-2h00-soir-de-semaine" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: false,
                                            primaryColor: '00a2ff',
                                            textColor: '4d5055'
                                        }}/>
                                    </div>
                                </div>
                                }
                            </div>
                            }
                        </div>
                        :
                        <div className="calendarContainer">
                            <div className="containerLeft">
                                <div className="logoCoutureContainer">
                                    <img src={logoCouture} className="logoCouture"></img>
                                </div>
                                <div className="creneauText">{creneau}</div>
                                <div className="messageText">Délassez vous dans l'espace piscine sauna spa, seul ou à plusieurs, le weekend.</div>
                                <div className="priceText">€{prix} EUR</div>
                            </div >
                            <div className="calendar">
                                <InlineWidget url="https://calendly.com/coutureducharme-le-spa/creneau-spa-2h00-weekend" 
                                                    pageSettings={{
                                                    backgroundColor: 'ffffff',
                                                    hideEventTypeDetails: true,
                                                    hideLandingPageDetails: false,
                                                    primaryColor: '00a2ff',
                                                    textColor: '4d5055'
                                }}/>
                            </div>
                        </div>
                        }
                    </div>
                    :
        <div className="containerBookSpa" id="containerBook">
            <div className="containerFormSpa">
                <div className="elementForm" id="formPersonne">
                    
                    <div className="textPersonne">Pour combien de personnes ? (max : 8 personnes)</div>
                    <input className="inputTextPersonne" type="number" id="nombre"  min="1" max="8"/>
                    

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
            <div className="containerImgDétente">
                <img src={détente} className="imgDétente"></img>  
            </div>                               
        </div>
        }    
    </div>
    )
}