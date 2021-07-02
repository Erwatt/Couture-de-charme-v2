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

    return(
        <div>
                <div className='room'>
                <Promise/>
                <div className='room-diapo'><Diaporama picturesList ={picturesList}/></div>
                <div className='room-info'><h1>Lorem ispum dolor</h1>
                    <div className='room-info-txt'>
                        <p>blablablabla</p>
                        <p>blublublublu</p>
                        </div>
                </div> 
            </div>
        </div>
    )
}