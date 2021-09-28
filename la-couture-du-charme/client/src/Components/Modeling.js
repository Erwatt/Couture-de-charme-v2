import '../CSS/Modelling.scss';
import React, { useState } from 'react';
import massage from '../Images/massage.jpg';
// import { useHistory } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// import services from '../services';


export default function Modelling(){

window.scrollTo(0, 0);

const[min30, setMin30]=useState(false);
const[min60, setMin60]=useState(false);
const[solo, setSolo]=useState(false);
const[duo, setDuo]=useState(false); 
const[invitation, setInvitation]=useState(false);
const[enveloppe, setEnveloppe]=useState(false);
const[coffret, setCoffret]=useState(false);
const[vip, setVip]=useState(false);
// const[nombre,setNombre]=useState(0);
// const[creneau,setCreneau]=useState("Créneau Modelage");
const[prix, setPrix]=useState(0);
const[validate,setvalidate]=useState(false);


const Book30min = ()=>{
    if(!validate){
        if (min30){setMin30(false)}
    else{setMin30(true)}
    setMin60(false)
    }
    
}

const Book60min = ()=>{
    if(!validate){
    if (min60){setMin60(false)}
    else{setMin60(true)}
    setMin30(false)}
}

const BookSolo = ()=>{
    if(!validate){
    if (solo){setSolo(false)}
    else{setSolo(true)}
    setDuo(false)
    // setNombre(1)
    }
}

const BookDuo = ()=>{
    if(!validate){
    if (duo){setDuo(false)}
    else{setDuo(true)}
    setSolo(false)
    // setNombre(2)
    }
}

const BookInvitation = ()=>{
    if(!validate){
    if (invitation){setInvitation(false)}
    else{setInvitation(true)}
    setEnveloppe(false)
    setCoffret(false)
    setVip(false)}
}

const BookEnveloppe = ()=>{
    if(!validate){
    if (enveloppe){setEnveloppe(false)}
    else{setEnveloppe(true)}
    setInvitation(false)
    setCoffret(false)
    setVip(true)}
}

const BookCoffret = ()=>{
    if(!validate){
    if (coffret){setCoffret(false)}
    else{setCoffret(true)}
    setEnveloppe(false)
    setInvitation(false)
    setVip(true)}
}

const Invalidate = ()=>{
    setvalidate(false)
}


const Validate = ()=>{
    if(solo===false&duo===false){setvalidate(false)}
    else{
        if (min30===false&&min60===false){setvalidate(false)}
        else{
            if(invitation===false&&enveloppe===false&&coffret===false){setvalidate(false)}
            else{
                if(min30){
                    if(solo){
                        // setCreneau("Créneau Modelage - " +nombre.toString()+ " personne" +" - 30 min")
                        if(coffret===true){setPrix(53)}
                        else{setPrix(35)}
                    }
                    else{
                        // setCreneau(" Créneau Modelage - " +nombre.toString()+ " personnes" +" - 30 min")
                        if(coffret===true){setPrix(78)}
                        else{setPrix(60)}                          
                    }
                }
                        
                else{
                    if(solo){
                        // setCreneau("Créneau Modelage - " +nombre.toString()+ " personne" +" - 60 min")
                        if(coffret===true){setPrix(78)}
                        else{setPrix(60)}                  
                    }
                    else{
                        // setCreneau("Créneau Modelage - " +nombre.toString()+ " personnes"  +" - 60 min")
                        if(coffret===true){setPrix(118)}
                        else{setPrix(100)}   
                    }
                }     
                setvalidate(true)
            }
        }
    }
}

// const [name, setName] = useState("");
// const [mail, setMail] = useState("");
// const [phone, setPhone] = useState("");
// // const [spam, setSpam] = useState(3);
// const [message, setMessage] = useState("");

// function handleMessage(e){
//     // if ( spam !== '4'){
//     //     e.preventDefault()
//     //     alert('Mauvaise réponse au test anti spam, va te faire foutre sale bot')
//     // } else {
//     //     services.sendMessage(name, phone, mail, message);
//     // }
//     // e.preventDefault()
//     console.log(e)
//     console.log(message)
//     services.sendMessage(name, phone, mail, message);
    
// };


    return(
        <div className="ModellingContainer">
            <div className="modellingFlexRow">
                <div className="modellingLeft">
                    <img src={massage} alt="spa" className="modellingPic"/>
                    <div>
                        <h1>Massage bien-être</h1>
                        <p>Les senteurs d'huiles prestigieuses aux différents pouvoirs vous offrent une expérience sensorielle unique.</p>
                        <p>Nos praticiennes adaptent l’intensité du massage en fonction de vos besoins. Pour un soin sur mesure (doux, moyen, fort), précisez votre choix à l’accueil.</p>
                    </div>
                </div>
                <div className="modellingRight">
                    <h2>Massage aux huiles aromatiques</h2>
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
                    <p><b>Enveloppe cadeau : </b>à retirer sur place ou envoyée par nos soins par courrier</p>
                    <p><b>Boîte Cadeau la Couture du Charme: </b>envoyée par nos soins (délai Colissimo)</p>
                    <div className="separation"></div>
                    <p><b>Personnalisez votre cadeau</b></p>
                    <div className="modellingFlexRow">
                        <div className="modellingFlexColumn">
                            <p>De la part de :</p>
                            {!validate?<input type="text" id="envoiMassage1" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage1" name="massage1" className="envoiMassage" disabled/>}
                            <p>Mail :</p>
                            {!validate?<input type="text" id="envoiMassage9" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage9" name="massage1" className="envoiMassage" disabled/>}
                            <p>Tél :</p>
                            {!validate?<input type="text" id="envoiMassage10" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage10" name="massage1" className="envoiMassage" disabled/>}
                        </div>
                        <div className="modellingFlexColumn">
                            <p>Offert à :</p>
                            {!validate?<input type="text" id="envoiMassage2" name="massage1" className="envoiMassage1"/>:<input type="text" id="envoiMassage2" name="massage1" className="envoiMassage1" disabled/>}
                            <p>Mail :</p>
                            {!validate?<input type="text" id="envoiMassage11" name="massage1" className="envoiMassage1"/>:<input type="text" id="envoiMassage11" name="massage1" className="envoiMassage1" disabled/>}
                            <p>Tél :</p>
                            {!validate?<input type="text" id="envoiMassage12" name="massage1" className="envoiMassage1"/>:<input type="text" id="envoiMassage12" name="massage1" className="envoiMassage1" disabled/>}
                        </div>
                    </div>
                    {vip?
                        <div>
                            <p>À livrer à (Nom Prénom) :</p>
                            {!validate?<input type="text" id="envoiMassage3" name="massage1" className="envoiMassage2"/>:<input type="text" id="envoiMassage3" name="massage1" className="envoiMassage2" disabled/>}
                            
                            <p>Adresse de livraison :</p>
                            {!validate?<input type="text" id="envoiMassage4" name="massage1" className="envoiMassage2"/>:<input type="text" id="envoiMassage4" name="massage1" className="envoiMassage2" disabled/>}
                            
                            <div className="modellingFlexRow">
                                <div className="modellingFlexColumn">
                                    <p>Code postal :</p>
                                    {!validate?<input type="text" id="envoiMassage5" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage5" name="massage1" className="envoiMassage" disabled/>}
                                    
                                </div>
                                <div className="modellingFlexColumn">
                                    <p>Ville :</p>
                                    {!validate?<input type="text" id="envoiMassage6" name="massage1" className="envoiMassage1" />:<input type="text" id="envoiMassage6" name="massage1" className="envoiMassage1" disabled/>}
                                
                                </div>
                            </div>
                        </div>:false}
                    <p>Message personnel (240 caractères maximum) :</p>
                    {!validate?<textarea rows="5" cols="50" maxLength="240" className="envoiMassage3"/>:<textarea rows="5" cols="50" maxLength="240" className="envoiMassage3" disabled/>}
                    
                    {
                        !validate?<p onClick={()=>Validate()}  id="envoiMassage7" className="panier">Valider</p>
                        :<p onClick={()=>Invalidate()}  id="envoiMassage8" className="panier">Réinitialiser</p>
                    }              
                    {
                        validate?
                        <div>
                            <div className="PriceBox">
                                <CheckoutForm element="ModelingGift" prix={prix}/>
                                <h2 className="giftPrice">{prix}€</h2>
                            </div>
                            <p className="StripeSentence">paiement effectué par <b>Stripe</b></p>
                        </div>
                        :false
                    }
                </div>
            </div>
        </div>

    )
}