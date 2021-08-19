import '../CSS/Modelling.scss';
import React, { useState } from 'react';
import massage from '../Images/spa.jpg';

export default function Modelling(){

const[min30, setMin30]=useState(false);
const[min60, setMin60]=useState(false);
const[solo, setSolo]=useState(false);
const[duo, setDuo]=useState(false); 
const[invitation, setInvitation]=useState(false);
const[enveloppe, setEnveloppe]=useState(false);
const[coffret, setCoffret]=useState(false);
const[vip, setVip]=useState(false);

const Book30min = ()=>{
    if (min30){setMin30(false)}
    else{setMin30(true)}
    setMin60(false)
}

const Book60min = ()=>{
    if (min60){setMin60(false)}
    else{setMin60(true)}
    setMin30(false)
}

const BookSolo = ()=>{
    if (solo){setSolo(false)}
    else{setSolo(true)}
    setDuo(false)
}

const BookDuo = ()=>{
    if (duo){setDuo(false)}
    else{setDuo(true)}
    setSolo(false)
}

const BookInvitation = ()=>{
    if (invitation){setInvitation(false)}
    else{setInvitation(true)}
    setEnveloppe(false)
    setCoffret(false)
    setVip(false)
}

const BookEnveloppe = ()=>{
    if (enveloppe){setEnveloppe(false)}
    else{setEnveloppe(true)}
    setInvitation(false)
    setCoffret(false)
    setVip(true)
}

const BookCoffret = ()=>{
    if (coffret){setCoffret(false)}
    else{setCoffret(true)}
    setEnveloppe(false)
    setInvitation(false)
    setVip(true)
}

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
        <div className="ModellingContainer">
            <div className="modellingFlexRow">
                <div className="modellingLeft">
                    <img src={massage} alt="spa" className="modellingPic"/>
                    <div>
                        <h1>Spa</h1>
                        <p>Les senteurs d'huiles prestigieuses aux différents pouvoirs vous offrent une expérience sensorielle unique.</p>
                        <p>Nos praticiennes adaptent l’intensité du massage en fonction de vos besoins. Pour un soin sur mesure (doux, moyen, fort), précisez votre choix à l’accueil.</p>
                    </div>
                </div>
                <div className="modellingRight">
                    <h2>les bubulles c'est agréable</h2>
                    <h1>on verra bien</h1>
                    <div className="separation"></div>
                    <p><b>Durée :</b></p>
                    <div className="modellingFlexRow">
                        {
                            min30?<p className="Clicked" onClick={()=>Book30min()}>30 min</p>:<p className="Unclicked" onClick={()=>Book30min()}>30 min</p>
                        }
                        {
                            min60?<p className="Clicked" onClick={()=>Book60min()}>60 min</p>:<p className="Unclicked" onClick={()=>Book60min()}>60 min</p>
                        }
                    </div>
                    <p><b>Solo ou Duo :</b></p>
                    <div className="modellingFlexRow">
                    {
                            solo?<p className="Clicked" onClick={()=>BookSolo()}>Solo</p>:<p className="Unclicked" onClick={()=>BookSolo()}>Solo</p>
                        }
                        {
                            duo?<p className="Clicked" onClick={()=>BookDuo()}>Duo</p>:<p className="Unclicked" onClick={()=>BookDuo()}>Duo</p>
                        }
                    </div>
                    <p><b>Options d'envoi :</b></p>
                    <div className="modellingFlexRow">
                    {
                            invitation?<p className="Clicked2" onClick={()=>BookInvitation()}>Invitation Electronique (gratuit)</p>:<p className="Unclicked2" onClick={()=>BookInvitation()}>Invitation Electronique (gratuit)</p>
                        }
                        {
                            enveloppe?<p className="Clicked2" onClick={()=>BookEnveloppe()}>Enveloppe cadeau (gratuit)</p>:<p className="Unclicked2" onClick={()=>BookEnveloppe()}>Enveloppe cadeau (gratuit)</p>
                        }
                        {
                            coffret?<p className="Clicked2" onClick={()=>BookCoffret()}>Boîte Cadeau la Couture du Charme (+18€)</p>:<p className="Unclicked2" onClick={()=>BookCoffret()}>Boîte Cadeau la Couture du Charme (+18€)</p>
                        }
                    </div>
                    <p><b>Invitation électronique : </b>envoyée par nos soins par mail</p>
                    <p><b>Enveloppe cadeau : </b>envoyée par nos soins (délai postal)</p>
                    <p><b>Boîte Cadeau la Couture du Charme: </b>envoyée par nos soins (délai Colissimo)</p>
                    <div className="separation"></div>
                    <p><b>Personnalisez votre cadeau</b></p>
                    <div className="modellingFlexRow">
                        <div className="modellingFlexColumn">
                            <p>De la part de :</p>
                            <input type="text" id="envoiMassage1" name="massage1" className="envoiMassage"/>
                        </div>
                        <div className="modellingFlexColumn">
                            <p>Offert à :</p>
                            <input type="text" id="envoiMassage2" name="massage1" className="envoiMassage1"/>
                        </div>
                    </div>
                    {vip?
                        <div>
                            <p>À livrer à (Nom Prénom) :</p>
                            <input type="text" id="envoiMassage3" name="massage1" className="envoiMassage2"/>
                            <p>Mail (destinataire) :</p>
                            <input type="text" id="envoiMassage8" name="massage1" className="envoiMassage2"/>
                            <p>Adresse de livraison :</p>
                            <input type="text" id="envoiMassage4" name="massage1" className="envoiMassage2"/>
                            <div className="modellingFlexRow">
                                <div className="modellingFlexColumn">
                                    <p>Code postal :</p>
                                    <input type="text" id="envoiMassage5" name="massage1" className="envoiMassage"/>
                                </div>
                                <div className="modellingFlexColumn">
                                    <p>Ville :</p>
                                <input type="text" id="envoiMassage6" name="massage1" className="envoiMassage1"/>
                                </div>
                            </div>
                        </div>:false}
                    <p>Message personnel (240 caractères maximum) :</p>
                    <textarea rows="5" cols="50" maxLength="240" className="envoiMassage3"/>
                    <p><input type="button" id="envoiMassage7" name="massage3" className="panier" value="Valider"/></p>
                </div>
            </div>
        </div>

    )
}