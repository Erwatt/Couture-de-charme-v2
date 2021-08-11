import React from 'react';
import Diaporama from './Diaporama';
import chambre from '../Images/chambre.jpeg';
import spa from '../Images/spa.jpeg';
import logo from '../Images/logo.png';
import piscine from '../Images/piscine.jpeg';
import '../CSS/PrivateRoom.css';


export default function PrivateRoom(){
    const picturesList1 = [chambre, spa, logo, piscine]
    window.scrollTo(0, 0);

    return(
        <div>
                <div className='room'>
                <div className="RoomHeader">Chambres<b></b></div>
                <div className="cocoon-box">
                    <h1>COCOON</h1>
                    <div className="cocoon-diapo"><Diaporama picturesList ={picturesList1}/></div>
                </div>
                <div className="fragole-box">
                    <h1>FRAGOLE</h1>
                    <div className='cocoon-diapo'><Diaporama picturesList ={picturesList1}/></div>
                </div>
                <div className="scandinave-box">
                    <h1>SCANDINAVE</h1>
                    <div className='cocoon-diapo'><Diaporama picturesList ={picturesList1}/></div>
                </div>
                <iframe  height='750' width='100%' src='https://widget.itea.fr/widget.php?key=amkkhds7&numGite=2697&widget-itea=prix' ></iframe> 
            </div>
        </div>
    );
};