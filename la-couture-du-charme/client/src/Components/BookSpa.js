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
    

    const[nombre1,setNombre1]=useState(false)
    const[nombre2,setNombre2]=useState(false)
    const[nombre3,setNombre3]=useState(false)
    const[nombre4,setNombre4]=useState(false)
    const[nombre5,setNombre5]=useState(false)
    const[nombre6,setNombre6]=useState(false)
    const[nombre7,setNombre7]=useState(false)
    const[nombre8,setNombre8]=useState(false)
    const[erreur,setErreur]=useState(false)



    const Nombre = (val) =>{
        if(val==1){
            if (nombre1){
                setNombre1(false)
                setNombre(0)
            }
            else{
                setNombre1(true)
                setNombre2(false)
                setNombre3(false)
                setNombre4(false)
                setNombre5(false)
                setNombre6(false)
                setNombre7(false)
                setNombre8(false)
                setNombre(1)

            }

        }
        if(val==2){
            if (nombre2){
                setNombre2(false)
                setNombre(0)
            }
            else{
                setNombre2(true)
                setNombre1(false)
                setNombre3(false)
                setNombre4(false)
                setNombre5(false)
                setNombre6(false)
                setNombre7(false)
                setNombre8(false)
                setNombre(2)

            }

        }
        if(val==3){
            if (nombre3){
                setNombre3(false)
                setNombre(0)
            }
            else{
                setNombre3(true)
                setNombre1(false)
                setNombre2(false)
                setNombre4(false)
                setNombre5(false)
                setNombre6(false)
                setNombre7(false)
                setNombre8(false)
                setNombre(3)

            }

        }
        if(val==4){
            if (nombre4){
                setNombre4(false)
                setNombre(0)
            }
            else{
                setNombre4(true)
                setNombre1(false)
                setNombre2(false)
                setNombre3(false)
                setNombre5(false)
                setNombre6(false)
                setNombre7(false)
                setNombre8(false)
                setNombre(4)

            }

        }
        if(val==5){
            if (nombre5){
                setNombre5(false)
                setNombre(0)
            }
            else{
                setNombre5(true)
                setNombre1(false)
                setNombre2(false)
                setNombre3(false)
                setNombre4(false)
                setNombre6(false)
                setNombre7(false)
                setNombre8(false)
                setNombre(5)

            }

        }
        if(val==6){
            if (nombre6){
                setNombre6(false)
                setNombre(0)
            }
            else{
                setNombre6(true)
                setNombre1(false)
                setNombre2(false)
                setNombre3(false)
                setNombre4(false)
                setNombre5(false)
                setNombre7(false)
                setNombre8(false)
                setNombre(6)

            }

        }
        if(val==7){
            if (nombre7){
                setNombre(0)
                setNombre7(false)
                setNombre(0)
            }
            else{
                setNombre7(true)
                setNombre1(false)
                setNombre2(false)
                setNombre3(false)
                setNombre4(false)
                setNombre5(false)
                setNombre6(false)
                setNombre8(false)
                setNombre(7)

            }

        }
        if(val==8){
            if (nombre8){
                setNombre(0)
                setNombre8(false)
                setNombre(0)
            }
            else{
                setNombre8(true)
                setNombre1(false)
                setNombre2(false)
                setNombre3(false)
                setNombre4(false)
                setNombre5(false)
                setNombre6(false)
                setNombre7(false)
                setNombre(8)

                
            }

        }
    }


    const BookWeekend = ()=>{
        if (weekend){setWeekend(false)}
        else{setWeekend(true)}
        setSemaine(false)
        setAfter17(false)
        setBefore17(false)
        setCreneau2h(false)
        setCreneau1h30(false)
    
    }
    const BookSemaine = ()=>{
        if (semaine){setSemaine(false)}
        else{setSemaine(true)}
        setWeekend(false)
        setAfter17(false)
        setBefore17(false)
        setCreneau2h(false)
        setCreneau1h30(false)
    }
    const BookBefore17 = ()=>{
        if(before17){setBefore17(false)}
        else{setBefore17(true)}
        setAfter17(false)
        setCreneau1h30(false)
        setCreneau2h(false)
    }
    const BookAfter17 = ()=>{
        setBefore17(false)
        setCreneau1h30(false)
        setCreneau2h(false)
        if(after17){setAfter17(false)}
        else{setAfter17(true)}
    }

    const Nombre1 = ()=>{
        setNombre2(false)
        setNombre3(false)
        setNombre4(false)
        setNombre5(false)
        setNombre6(false)
        setNombre7(false)
        setNombre8(false)
        if(nombre1){setNombre1(false)
             setNombre(0)}
        else{setNombre1(true)}
        setNombre(1)
    }

     const Nombre2 = ()=>{
         setNombre1(false)
         setNombre3(false)
         setNombre4(false)
         setNombre5(false)
         setNombre6(false)
         setNombre7(false)
         setNombre8(false)
         if(nombre2){setNombre2(false)
            setNombre(0)}
         else{setNombre2(true)}
         setNombre(2)
     }
     const Nombre3 = ()=>{
         setNombre2(false)
         setNombre1(false)
         setNombre4(false)
         setNombre5(false)
         setNombre6(false)
         setNombre7(false)
         setNombre8(false)
         if(nombre3){setNombre3(false)
            setNombre(0)}
         else{setNombre3(true)}
         setNombre(3)
     }
     const Nombre4 = ()=>{
         setNombre2(false)
         setNombre3(false)
         setNombre1(false)
         setNombre5(false)
         setNombre6(false)
         setNombre7(false)
         setNombre8(false)
         if(nombre4){setNombre4(false)
            setNombre(0)}
         else{setNombre4(true)}
         setNombre(4)
     }
     const Nombre5 = ()=>{
         setNombre2(false)
         setNombre3(false)
         setNombre4(false)
         setNombre1(false)
         setNombre6(false)
         setNombre7(false)
         setNombre8(false)
         if(nombre5){setNombre5(false)
            setNombre(0)}
         else{setNombre5(true)}
         setNombre(5)
     }
    const Nombre6 = ()=>{
        setNombre2(false)
        setNombre3(false)
        setNombre4(false)
        setNombre5(false)
        setNombre1(false)
        setNombre7(false)
        setNombre8(false)
        if(nombre6){setNombre6(false)
            setNombre(0)}
        else{setNombre6(true)}
        setNombre(6)
    }

    const Nombre7 = ()=>{
        setNombre2(false)
        setNombre3(false)
        setNombre4(false)
        setNombre5(false)
        setNombre1(false)
        setNombre6(false)
        setNombre8(false)
        if(nombre7){setNombre7(false)
            setNombre(0)}
        else{setNombre7(true)}
        setNombre(7)
    }

     const Nombre8 = ()=>{
         setNombre2(false)
         setNombre3(false)
         setNombre4(false)
         setNombre5(false)
         setNombre1(false)
         setNombre7(false)
         setNombre6(false)
         if(nombre8){setNombre8(false)
            setNombre(0)}
         else{setNombre8(true)}
         setNombre(8)
     }
    
    const Creneau2h = ()=>{
        setCreneau1h30(false)
        if(creneau2h){setCreneau2h(false) }
        else{setCreneau2h(true)}
    }
    const Creneau1h30h = ()=>{
        setCreneau2h(false)
        if(creneau1h30){setCreneau1h30(false)}
        else{setCreneau1h30(true)}
    }
    
    const Validate = ()=>{
        if(nombre<1||nombre>8){
            setvalidate(false)
            setErreur(true)
        }
        else{
            if (semaine===false&&weekend===false){
                setvalidate(false)
                setErreur(true)}
            else{
                if(semaine&&after17===false&&before17===false){
                    setvalidate(false)
                    setErreur(true)}
                else{
                    if(semaine&&after17&&creneau2h===false&&creneau1h30===false){
                        setvalidate(false)
                        setErreur(true)
                    }
                    else{
                        if(semaine){
                            
                            if(after17){
                                if(creneau1h30){
                                    if(nombre>1){ setCreneau("Créneau Spa - " +" Semaine - "+nombre.toString()+ " personnes" +" - 1h30")}
                                    else{ setCreneau("Créneau Spa - " +" Semaine - "+nombre.toString()+ " personne" +" - 1h30")}
                                    if(nombre==1||nombre==2){setPrix(90)}
                                    else{setPrix(90+(nombre-2)*20)}
                            }
                                else{
                                    if(nombre>1){ setCreneau(" Créneau Spa - Semaine - " +nombre.toString()+ " personnes" +" - 2h")}
                                    else{setCreneau(" Créneau Spa - Semaine - " +nombre.toString()+ " personne" +" - 2h")}
                                    
                                    if(nombre==1||nombre==2){setPrix(110)}
                                    else{setPrix(110+(nombre-2)*20)}                            }
                            }
                            else{
                                if(nombre>1){ setCreneau("Créneau Spa - Semaine - " +nombre.toString()+ " personnes")}
                                    else{ setCreneau("Créneau Spa - Semaine - " +nombre.toString()+ " personne")}
                                if(nombre==1||nombre==2){setPrix(80)}
                                else{setPrix(80+(nombre-2)*20)}                        }
                                
                        }
                        else{
                            if(nombre>1){setCreneau("Créneau Spa - Weekend - 2h - " +nombre.toString()+ " personnes")}
                                    else{ setCreneau("Créneau Spa - Weekend - 2h - " +nombre.toString()+ " personne")}
                            if(nombre==1||nombre==2){setPrix(130)}
                            else{setPrix(130+(nombre-2)*20)}                    }
    
    
                        
    
    
                        setErreur(false)
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
                                <div>
                                    <div className="messageText">Délassez vous dans l'espace piscine sauna spa, seul ou à plusieurs, en semaine avant 17h.</div>
                                    <div className="accompteTXT">Accompte : 80 €</div>                                    
                                    <div className="priceText">{prix} €<div className="ttcText">TTC</div></div>                                </div>
                            </div >
                            <div className="calendar">
                                <InlineWidget url="https://calendly.com/coutureducharme-le-spa/creneau-spa-1h30-journee-semaine" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
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
                                        <div className="accompteTXT">Accompte : 90 €</div>  
                                        <div className="priceText">{prix} €<div className="ttcText">TTC</div></div>
                                    </div >
                                    <div className="calendar">
                                        <InlineWidget  url="https://calendly.com/coutureducharme-le-spa/creneau-spa-1h30-soir-de-semaine" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: false,
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
                                        <div className="accompteTXT">Accompte : 110 €</div>  
                                        <div className="priceText">{prix} €<div className="ttcText">TTC</div></div>                                    </div >
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
                                <div className="accompteTXT">Accompte : 130 €</div>  
                                <div className="priceText">{prix} €<div className="ttcText">TTC</div></div>                            </div >
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
                    <div className="textPersonne">Nombre de participant(s) : </div>
                    <div className="containerNombreParticipant">
                        <div onClick={()=>Nombre(1)} className={nombre1?"nombreClicked":"nombreElement"}>1</div>
                        <div onClick={()=>Nombre(2)} className={nombre2?"nombreClicked":"nombreElement"}>2</div>
                        <div onClick={()=>Nombre(3)} className={nombre3?"nombreClicked":"nombreElement"}>3</div>
                        <div onClick={()=>Nombre(4)} className={nombre4?"nombreClicked":"nombreElement"}>4</div>
                        <div onClick={()=>Nombre(5)} className={nombre5?"nombreClicked":"nombreElement"}>5</div>
                        <div onClick={()=>Nombre(6)} className={nombre6?"nombreClicked":"nombreElement"}>6</div>
                        <div onClick={()=>Nombre(7)} className={nombre7?"nombreClicked":"nombreElement"}>7</div>
                        <div onClick={()=>Nombre(8)} className={nombre8?"nombreClicked":"nombreElement"}>8</div>
                    </div>
                    

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
                    <p className="validateBtn" onClick={()=>Validate()} >Valider</p>
                   
                </div>
                
                
            </div>
            {
                        erreur?<div className="erreurMgs">Certaines informations sont manquantes.</div>:false
                    }
            <div className="containerImgDétente">
                <img src={détente} className="imgDétente"></img>  
            </div>                               
        </div>
        }    
    </div>
    )
}