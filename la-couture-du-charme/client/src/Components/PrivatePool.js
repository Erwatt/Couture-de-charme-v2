import React from 'react';
import Diaporama from './Diaporama';
import chambre from '../Images/chambre.jpeg';
import spa from '../Images/spa.jpeg';
import logo from '../Images/logo.png';
import piscine from '../Images/piscine.jpeg';
import Promise from './Promise';
import '../CSS/PrivatePool.css';

function PrivatePool(){
    const picturesList = [chambre, spa, logo, piscine];
    window.scrollTo(0, 0);

    return (
        <div className="pool">
            <div className="pool-diapo">
                <Diaporama picturesList={picturesList}/>
            </div>
            <div className="pool-info">
                <div className="pool-info-title">
                    <h1>LOREM IPSUM</h1>
                </div>
                <div className="pool-info-txt">
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
    );

};

export default PrivatePool;