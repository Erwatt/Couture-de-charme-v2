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
                
                    <div className='spa-diapo'><Diaporama picturesList ={picturesList}/></div>
                    <div className='spa-info'>
                        <h1 className="spa-info-title">Lorem ispum dolor</h1>
                        <div className='spa-info-txt'>
                            <p className="spa-info-txt-element">Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
                            </p>
                            <p className="spa-info-txt-element">Lorem ipsum nico ipsum lorem dolor est dolor ispsum lorem dolor dolor trop ipsum ipsum lorem dolor beau dolor
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