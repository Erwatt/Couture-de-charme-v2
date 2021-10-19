import '../CSS/Modelling.scss';
import React, { useState, useEffect } from 'react';
import piscine from '../Images/photoPiscine.jpg';
// import { useHistory } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// import services from '../services';

export default function Spa(){

// window.scrollTo(0, 0);

// const[min30, setMin30]=useState(false);
// const[min60, setMin60]=useState(false);
const[un, set1]=useState(false);
const[deux, set2]=useState(false);
const[trois, set3]=useState(false);
const[quatre, set4]=useState(false);
const[cinq, set5]=useState(false);
const[six, set6]=useState(false);
const[sept, set7]=useState(false);
const[huit, set8]=useState(false); 
const[invitation, setInvitation]=useState(false);
const[enveloppe, setEnveloppe]=useState(false);
const[coffret, setCoffret]=useState(false);
const[vip, setVip]=useState(false);

// const Book30min = ()=>{
//     if(!validate){
//     if (min30){setMin30(false)}
//     else{setMin30(true)}
//     setMin60(false)}
// }

// const Book60min = ()=>{
//     if(!validate){
//     if (min60){setMin60(false)}
//     else{setMin60(true)}
//     setMin30(false)}
// }

const Book1 = ()=>{
    if(!validate){
    if (un){set1(false)}
    else{set1(true)}
    set2(false)
    set3(false)
    set4(false)
    set5(false)
    set6(false)
    set7(false)
    set8(false)
    setNombre(1)}
}

const Book2 = ()=>{
    if(!validate){
    if (deux){set2(false)}
    else{set2(true)}
    set1(false)
    set3(false)
    set4(false)
    set5(false)
    set6(false)
    set7(false)
    set8(false)
    setNombre(2)}
}

const Book3 = ()=>{
    if(!validate){
    if (trois){set3(false)}
    else{set3(true)}
    set2(false)
    set1(false)
    set4(false)
    set5(false)
    set6(false)
    set7(false)
    set8(false)
    setNombre(3)}
}

const Book4 = ()=>{
    if(!validate){
    if (quatre){set4(false)}
    else{set4(true)}
    set2(false)
    set3(false)
    set1(false)
    set5(false)
    set6(false)
    set7(false)
    set8(false)
    setNombre(4)}
}

const Book5 = ()=>{
    if(!validate){
    if (cinq){set5(false)}
    else{set5(true)}
    set2(false)
    set3(false)
    set4(false)
    set1(false)
    set6(false)
    set7(false)
    set8(false)
    setNombre(5)}
}

const Book6 = ()=>{
    if(!validate){
    if (six){set6(false)}
    else{set6(true)}
    set2(false)
    set3(false)
    set4(false)
    set5(false)
    set1(false)
    set7(false)
    set8(false)
    setNombre(6)}
}

const Book7 = ()=>{
    if(!validate){
    if (sept){set7(false)}
    else{set7(true)}
    set2(false)
    set3(false)
    set4(false)
    set5(false)
    set6(false)
    set1(false)
    set8(false)
    setNombre(7)}
}

const Book8 = ()=>{
    if(!validate){
    if (huit){set8(false)}
    else{set8(true)}
    set2(false)
    set3(false)
    set4(false)
    set5(false)
    set6(false)
    set7(false)
    set1(false)
    setNombre(8)}
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

const[semaine,setSemaine]=useState(false)
    const [weekend,setWeekend]=useState(false)
    const [before17,setBefore17]=useState(false)
    const [after17,setAfter17]=useState(false)
    const [nombre,setNombre]=useState(0)
    const [validate,setvalidate]=useState(false)
    const [creneau2h,setCreneau2h]=useState(false)
    const [creneau1h30,setCreneau1h30]=useState(false)
    // const[creneau,setCreneau]=useState("Créneau Spa")
    const [prix, setPrix]=useState(0)
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [mailReceiver, setMailReceiver] = useState("");
    const [mailSender, setMailSender] = useState("");
    const [telReceiver, setTelReceiver] = useState("");
    const [telSender, SetTelSender] = useState("");
    const [message, setMessage] = useState("");
    const [deliveryName, setDeliveryName] = useState("");
    const [adress, setAdress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [creneau, setCreneau] = useState("");
    const [sending, setSending] = useState("");

    const BookWeekend = ()=>{
        if(!validate){
        if (weekend){setWeekend(false)}
        else{setWeekend(true)}
        setSemaine(false)
        setAfter17(false)
        setBefore17(false)
        setCreneau1h30(false)
        setCreneau2h(false)}
    
    }
    const BookSemaine = ()=>{
        if(!validate){
        if (semaine){setSemaine(false)}
        else{setSemaine(true)}
        setWeekend(false)
        setAfter17(false)
        setBefore17(false)}

    }
    const BookBefore17 = ()=>{
        if(!validate){
        if(before17){setBefore17(false)}
        else{setBefore17(true)}
        setAfter17(false)}
    }
    const BookAfter17 = ()=>{
        if(!validate){
        setBefore17(false)
        if(after17){setAfter17(false)}
        else{setAfter17(true)}}
    }
    
    const Creneau2h = ()=>{
        if(!validate){
        setCreneau1h30(false)
        if(creneau2h){setCreneau2h(false)}
        else{setCreneau2h(true)}}
    }
    const Creneau1h30h = ()=>{
        if(!validate){
        setCreneau2h(false)
        if(creneau1h30){setCreneau1h30(false)}
        else{setCreneau1h30(true)}}
    }

    const Invalidate = ()=>{
        setvalidate(false)
    }
    
    const Validate = ()=>{
        if((!semaine&!weekend)|(semaine&!after17&!before17)|(semaine&after17&!creneau1h30&!creneau2h)|(!enveloppe&!coffret&!invitation)|
        (from === "")|(to === "")|(mailReceiver === "")|(mailSender === "")|(telReceiver === "")|(telSender === "")|(message === "")){
            setvalidate(false)
        }
        else{
            setvalidate(true)
        }
    }

    useEffect(() => {
        if(nombre!==0){
            if(semaine){ 
                if(after17){
                    if(creneau1h30){
                        setCreneau(`Semaine, ${nombre} personnes créneau 1h30 après 17h`)
                        // setCreneau("Créneau Spa - " +" Semaine - "+nombre.toString()+ " personne(s)" +" - 1h30")
                        if(nombre===1||nombre===2){
                            if(coffret===true){
                                setPrix(108);
                                setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                            }
                            else{
                                setPrix(90)
                                if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                            }
                        }
                        else{
                            if(coffret===true){
                                setPrix(108+(nombre-2)*20)
                                setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                            }
                            else{
                                setPrix(90+(nombre-2)*20)
                                if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                            }
                        }
                    }
                    else{
                        // setCreneau(" Créneau Spa - Semaine - " +nombre.toString()+ " personne(s)" +" - 2h")
                        setCreneau(`Semaine, ${nombre} personnes créneau 2H après 17h`)
                        if(nombre===1||nombre===2){
                            if(coffret===true){
                                setPrix(128)
                                setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                            }
                            else{
                                setPrix(110)
                                if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                            }}
                        else{
                            if(coffret===true){setPrix(128+(nombre-2)*30)}
                            else{
                                setPrix(110+(nombre-2)*30)
                                if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                            }
                        }
                    }
                }

                else{
                    // setCreneau("Créneau Spa - Semaine - " +nombre.toString()+ " personne(s)")
                    setCreneau(`Semaine, ${nombre} personnes créneau avant 17h`)
                    if(nombre===1||nombre===2){
                        if(coffret===true){
                            setPrix(98)
                            setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                        }
                        else{
                            setPrix(80)
                            if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                        }}
                    else{
                        if(coffret===true){
                            setPrix(98+(nombre-2)*20)
                            setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                        }
                        else{
                            setPrix(80+(nombre-2)*20)
                            if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                        }
                    }                        
                }
                    
            }
            else if (weekend){
                // setCreneau("Créneau Spa - Weekend - " +nombre.toString()+ " personne(s)")
                setCreneau(`Weekend, ${nombre} personnes`)
                if(nombre===1||nombre===2){
                    if(coffret===true){
                        setPrix(148)
                        setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                    }
                    else{
                        setPrix(130)
                        if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                                else{setSending(`Email`)}
                    }}
                else{
                    if(coffret===true){
                        setPrix(148+(nombre-2)*20)
                        setSending(`Coffret cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)
                    }
                    else{
                        setPrix(130+(nombre-2)*20)
                        if (enveloppe){setSending(`Enveloppe cadeau, livraison: ${deliveryName} ${adress} ${postalCode} ${city}`)}
                        else{setSending(`Email`)}
                    }}                    
            }
            
            if((!semaine&!weekend)|(semaine&!after17&!before17)|(semaine&after17&!creneau1h30&!creneau2h)){
                setPrix(0)
            }
        }
    }, [after17,before17, coffret, enveloppe, invitation, creneau1h30, creneau2h, nombre, semaine, weekend, adress, city, deliveryName, postalCode])
    


    return(
        <div className="ModellingContainer">
            <div className="modellingFlexRow">
                <div className="modellingLeft">
                    <img src={piscine} alt="spa" className="poolPic"/>
                    <div>
                        <h1>Spa</h1>
                        <p>Offrez un moment de détente unique dans notre espace piscine sauna et spa.</p>
                        <p>En créneau privatif.</p>
                    </div>
                </div>
                <div className="modellingRight">
                    <h2>Espace détente</h2><h3>Prix: {prix}€</h3>
                    <div className="separation"></div>
                    <p><b>Participants :</b></p>
                    <div className="modellingFlexRow2">
                        {
                            <p onClick={()=>Book1()} className={un ? "Clicked" : "Unclicked"}>1</p>
                        }
                        {
                            <p onClick={()=>Book2()} className={deux ? "Clicked" : "Unclicked"}>2</p>
                        }
                        {
                            <p onClick={()=>Book3()} className={trois ? "Clicked" : "Unclicked"}>3</p>
                        }
                        {
                            <p onClick={()=>Book4()} className={quatre ? "Clicked" : "Unclicked"}>4</p>
                        }
                        {
                            <p onClick={()=>Book5()} className={cinq ? "Clicked" : "Unclicked"}>5</p>
                        }
                        {
                            <p onClick={()=>Book6()} className={six ? "Clicked" : "Unclicked"}>6</p>
                        }
                        {
                            <p onClick={()=>Book7()} className={sept ? "Clicked" : "Unclicked"}>7</p>
                        }
                        {
                            <p onClick={()=>Book8()} className={huit ? "Clicked" : "Unclicked"}>8</p>
                        }
                    </div>  

                    <p><b>Créneau souhaité pour votre cadeau:</b></p>
                    <div className="modellingFlexRow">
                        <div className="spaSlots">
                            {
                                semaine?<p className="Clicked3"  onClick={()=>BookSemaine()}>En semaine</p>:<p className="Unclicked3" onClick={()=>BookSemaine()}>En semaine</p>
                            }
                            {
                                weekend? <p className="Clicked3" onClick={()=>BookWeekend()}>Le weekend</p>: <p className="Unclicked3" onClick={()=>BookWeekend()}>Le weekend</p>
                            }
                        
                        </div>

                        {
                            semaine?
                            <div className="spaSlots">
                                {
                                    before17?<p className="Clicked3" onClick={()=>BookBefore17()}>Avant 17 h</p>:<p className="Unclicked3" onClick={()=>BookBefore17()}>Avant 17 h</p> 
                                }
                                {
                                    after17?<p className="Clicked3" onClick={()=>BookAfter17()}>Après 17h</p>:<p className="Unclicked3" onClick={()=>BookAfter17()}>Après 17h</p>
                                }
                                
                            </div>
                            :false
                        }
                        {
                            after17?
                            <div className="spaSlots">
                                {
                                    creneau1h30?<p className="Clicked3" onClick={()=>Creneau1h30h()}>Créneau 1h30</p>:<p className="Unclicked3" onClick={()=>Creneau1h30h()}>Créneau 1h30</p> 
                                }
                                {
                                    creneau2h?<p className="Clicked3" onClick={()=>Creneau2h()}>Créneau 2h</p>:<p className="Unclicked3" onClick={()=>Creneau2h()}>Créneau 2h</p>
                                }
                            
                            </div>
                            :false
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
                            {!validate?<input type="text" onChange={(e) => setFrom(e.target.value)} id="envoiMassage1" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage1" name="massage1" className="envoiMassage" disabled/>}
                            <p>Mail :</p>
                            {!validate?<input type="text" onChange={(e) => setMailSender(e.target.value)} id="envoiMassage2" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage9" name="massage1" className="envoiMassage" disabled/>}
                            <p>Tél :</p>
                            {!validate?<input type="text" onChange={(e) => SetTelSender(e.target.value)} id="envoiMassage3" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage10" name="massage1" className="envoiMassage" disabled/>}
                        </div>
                        <div className="modellingFlexColumn">
                            <p>Offert à :</p>
                            {!validate?<input type="text" onChange={(e) => setTo(e.target.value)} id="envoiMassage4" name="massage1" className="envoiMassage1"/>:<input type="text" id="envoiMassage2" name="massage1" className="envoiMassage1" disabled/>}
                            <p>Mail :</p>
                            {!validate?<input type="text" onChange={(e) => setMailReceiver(e.target.value)} id="envoiMassage5" name="massage1" className="envoiMassage1"/>:<input type="text" id="envoiMassage11" name="massage1" className="envoiMassage1" disabled/>}
                            <p>Tél :</p>
                            {!validate?<input type="text" onChange={(e) => setTelReceiver(e.target.value)} id="envoiMassage6" name="massage1" className="envoiMassage1"/>:<input type="text" id="envoiMassage12" name="massage1" className="envoiMassage1" disabled/>}
                        </div>
                    </div>
                    {vip?
                        <div>
                            <p>À livrer à (Nom Prénom) :</p>
                            {!validate?<input onChange={(e) => setDeliveryName(e.target.value)} type="text" id="envoiMassage7" name="massage1" className="envoiMassage2"/>:<input type="text" id="envoiMassage3" name="massage1" className="envoiMassage2" disabled/>}
                            
                            <p>Adresse de livraison :</p>
                            {!validate?<input onChange={(e) => setAdress(e.target.value)} type="text" id="envoiMassage8" name="massage1" className="envoiMassage2"/>:<input type="text" id="envoiMassage4" name="massage1" className="envoiMassage2" disabled/>}
                            
                            <div className="modellingFlexRow">
                                <div className="modellingFlexColumn">
                                    <p>Code postal :</p>
                                    {!validate?<input onChange={(e) => setPostalCode(e.target.value)} type="text" id="envoiMassage9" name="massage1" className="envoiMassage"/>:<input type="text" id="envoiMassage5" name="massage1" className="envoiMassage" disabled/>}
                                    
                                </div>
                                <div className="modellingFlexColumn">
                                    <p>Ville :</p>
                                    {!validate?<input onChange={(e) => setCity(e.target.value)} type="text" id="envoiMassage10" name="massage1" className="envoiMassage1" />:<input type="text" id="envoiMassage6" name="massage1" className="envoiMassage1" disabled/>}
                                
                                </div>
                            </div>
                        </div>:false}
                    <p>Message personnel (240 caractères maximum) :</p>
                    {!validate?<textarea onChange={(e) => setMessage(e.target.value)} rows="5" cols="50" maxLength="240" className="envoiMassage11"/>:<textarea rows="5" cols="50" maxLength="240" className="envoiMassage3" disabled/>}
                    {
                        !validate?<p onClick={()=>Validate()}  id="envoiMassage12" className="panier">Valider</p>
                        :<p onClick={()=>Invalidate()}  id="envoiMassage13" className="panier">Réinitialiser</p>
                    }
                    {
                        validate?
                        <div>
                            <div className="PriceBox">
                                <CheckoutForm element="ModelingGift" prix={prix}
                                ligne1={document.getElementById('envoiMassage5').value}
                                event="spa"
                                from={from}
                                to={to}
                                mailSender={mailSender}
                                mailReceiver={mailReceiver}
                                telSender={telSender}
                                telReceiver={telReceiver}
                                message={message}
                                creneau={creneau}
                                sending={sending}
                                number={nombre}/>
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