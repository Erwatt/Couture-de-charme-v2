import React from 'react';
import Diaporama from './Diaporama';
import chambre from '../Images/chambre.jpeg';
import spa from '../Images/spa.jpeg';
import logo from '../Images/logo.png';
import piscine from '../Images/piscine.jpeg';
import '../CSS/PrivateSpa.css';
import Promise from './Promise';

export default function PrivateSpa(){
    const picturesList = [chambre, spa, logo, piscine];
    window.scrollTo(0, 0);

    return (
        <div>
                <div className='spa'>
                <Promise/>
                <div className='spa-diapo'><Diaporama picturesList ={picturesList}/></div>
                <div className='spa-info'><h1>Lorem ispum dolor</h1>
                    <div className='spa-info-txt'>
                        <p>blablablabla</p>
                        <p>blublublublu</p>
                    </div>
                </div> 
            </div>
        </div>
    );
};