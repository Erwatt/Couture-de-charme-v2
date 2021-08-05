import React from 'react';
import Diaporama from './Diaporama';
import chambre from '../Images/chambre.jpeg';
import spa from '../Images/spa.jpeg';
import logo from '../Images/logo.png';
import piscine from '../Images/piscine.jpeg';
import '../CSS/PrivateRoom.css';
import Promise from './Promise';

export default function PrivateRoom(){
    const picturesList = [chambre, spa, logo, piscine]
    window.scrollTo(0, 0);

    return(
        <div>
                <div className='room'>
                
                    <div className='room-diapo'><Diaporama picturesList ={picturesList}/></div>
                    <div className='room-info'>
                        <h1 className="room-info-title">Lorem ispum dolor</h1>
                        <div className='room-info-txt'>
                            <p className="room-info-txt-element">Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            </p>
                            <p className="room-info-txt-element">Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            </p>
                        </div>
                    </div> 
                </div>
        </div>
    );
};