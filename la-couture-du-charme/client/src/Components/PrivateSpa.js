import React from 'react';
import Diaporama from './Diaporama';
import fontaine from '../Images/fontaine.jpg';
import spa from '../Images/spa.jpg';
import poufs from '../Images/poufs.jpg';
import sauna from '../Images/sauna.jpg';
import piscine from '../Images/piscine.jpg'
import '../CSS/PrivateSpa.css';


export default function PrivateSpa(){
    const picturesList = [fontaine, spa, poufs, sauna, piscine];
    window.scrollTo(0, 0);

    return (
        <div>
                <div className='spa'>
                <div className="SpaHeader">Spa privatif<b></b></div>
                <div className='spa-diapo'><Diaporama picturesList ={picturesList}/></div>
                <div className='spa-info'><h1>Lorem ispum dolor</h1>
                    <div className='spa-info-txt'>
                    <p>Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                    Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                    Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                    Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                    </p>
                    <p>Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
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