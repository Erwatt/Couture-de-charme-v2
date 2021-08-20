import '../CSS/Modelling.scss';
import React, { useState } from 'react';
import massage from '../Images/massage.jpg';

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


    return(
        <div className="ModellingContainer">
            <div className="modellingFlexRow">
                <div className="modellingLeft">
                    <img src={massage} alt="spa" className="modellingPic"/>
                    <div>
                        <h1>Modelage</h1>
                        <p>Les senteurs d'huiles prestigieuses aux différents pouvoirs vous offrent une expérience sensorielle unique.</p>
                        <p>Nos praticiennes adaptent l’intensité du massage en fonction de vos besoins. Pour un soin sur mesure (doux, moyen, fort), précisez votre choix à l’accueil.</p>
                    </div>
                </div>
                <div className="modellingRight">
                    <h2>Massage aux huiles aromatiques</h2>
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