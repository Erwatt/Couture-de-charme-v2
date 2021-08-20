import '../CSS/Gift.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import spa from '../Images/spa.jpg';
import massage from '../Images/massage.jpg';
import { useHistory } from 'react-router';



export default function Gift(){
    window.scrollTo(0, 0);
    
    let history=useHistory();

    function handleModelling(){
        history.push("/Modelling");
    }

    function handleGiftSpa(){
        history.push("/Spa");
    }


    return(<div>
        <div className="giftbox">
            <div className="gift-title">
                <p><h1>Coffrets Cadeau, Invitations Cadeau</h1><br></br>
                <p>Un délicieux moment de détente pour oublier le stress quotidien, <b>c'est la promesse que vous offrez.</b></p>
                <p>Chacun de  nos modelages ou de nos créneaux Spa Privatif est une escapade dans un univers de bien-être.</p></p>
            </div>
            <div className="gift-box1">
                <img src={spa} alt="gift-pic1" className="gift-pic1"/>
                <div className="gift-text1">
                    <h2>Au choix pour votre bon-cadeau (modelage ou spa privatif) : </h2>
                    <li>Une enveloppe prête à offrir ou envoyée par nos soins, comprenant votre invitation personnalisée</li>
                    <li>Une invitation électronique par email,  pour les plus pressé(e)s et les cadeaux de dernière minute</li>
                    <li>Un élégant coffret imaginé pour vous, comprenant votre invitation personnalisée</li>
                    <p>N'hésitez pas à offrir une prestation duo...</p>
                    <p>Vous pourrez ainsi partager à deux l'expérience du modelage ou du créneau spa, et créer un souvenir tendre ou amical.</p>
                </div>
            </div>
            <div className="gift-box2">
                <div className="link1" onClick={handleGiftSpa}>
                    <img src={spa} alt="gift-pic2" className="gift-pic2"/>
                    <p><b>Spa</b></p>
                </div>
                <div className="link2" onClick={handleModelling}>
                    <img src={massage} alt="gift-pic3" className="gift-pic3"/>
                    <p><b>Massage</b></p>
                </div>
            </div>
        </div>
        
    </div>
    )
}