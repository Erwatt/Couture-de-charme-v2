import '../CSS/Modelling.scss';
import React, { useState } from 'react';
import spa from '../Images/spa.jpg';

export default function Modelling(){

const[min60, setMin60]=useState(false);
const[min90, setMin90]=useState(false);
const[min120, setMin120]=useState(false);
const[solo, setSolo]=useState(false);
const[duo, setDuo]=useState(false); 
const[invitation, setInvitation]=useState(false);
const[enveloppe, setEnveloppe]=useState(false);
const[coffret, setCoffret]=useState(false);
const[vip, setVip]=useState(false);

const Book60min = ()=>{
    if (min60){setMin60(false)}
    else{setMin60(true)}
    setMin90(false)
    setMin120(false)
}

const Book90min = ()=>{
    if (min90){setMin90(false)}
    else{setMin90(true)}
    setMin60(false)
    setMin120(false)
}

const Book120min = ()=>{
    if (min120){setMin120(false)}
    else{setMin120(true)}
    setMin60(false)
    setMin90(false)
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
                    <img src={spa} alt="spa" className="modellingPic"/>
                    <div>
                        <h1>Modelage</h1>
                        <p>Les senteurs d'huiles prestigieuses aux différents pouvoirs vous offrent une expérience sensorielle unique.</p>
                        <p>Nos praticiennes adaptent l’intensité du massage en fonction de vos besoins. Pour un soin sur mesure (doux, moyen, fort), précisez votre choix à l’accueil.</p>
                    </div>
                </div>
                <div className="modellingRight">
                    <h2>Massage aux huiles thaï aromatiques</h2>
                    <h1>168€</h1>
                    <div className="separation"></div>
                    <p><b>Durée :</b></p>
                    <div className="modellingFlexRow">
                        {
                            min60?<p className="Clicked" onClick={()=>Book60min()}>60 min</p>:<p className="Unclicked" onClick={()=>Book60min()}>60 min</p>
                        }
                        {
                            min90?<p className="Clicked" onClick={()=>Book90min()}>90 min</p>:<p className="Unclicked" onClick={()=>Book90min()}>90 min</p>
                        }
                        {
                            min120?<p className="Clicked" onClick={()=>Book120min()}>120 min</p>:<p className="Unclicked" onClick={()=>Book120min()}>120 min</p>
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
                            coffret?<p className="Clicked2" onClick={()=>BookCoffret()}>Coffret Boîte à chapeau (+18€)</p>:<p className="Unclicked2" onClick={()=>BookCoffret()}>Coffret Boîte à chapeau (+18€)</p>
                        }
                    </div>
                    <p><b>Invitation électronique : </b>à télécharger maintenant</p>
                    <p><b>Enveloppe cadeau : </b>envoyée par nos soins (délai postal)</p>
                    <p><b>Coffret Boîte à chapeau : </b>envoyé par nos soins (délai Colissimo)</p>
                    <div className="separation"></div>
                    <p><b>Personnalisez votre chèque cadeau</b></p>
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
                    <p><input type="button" id="envoiMassage" name="massage3" className="panier" value="Valider"/></p>
                </div>
            </div>
        </div>

    )
}