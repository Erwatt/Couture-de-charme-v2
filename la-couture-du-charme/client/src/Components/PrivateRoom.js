import React from 'react';
import Diaporama from './Diaporama';
import '../CSS/PrivateRoom.css';
import cocoon1 from '../Images/cocoon1.jpg';
import cocoon2 from '../Images/cocoon2.JPG';
import cocoon3 from '../Images/cocoon3.JPG';
import cocoon4 from '../Images/cocoon4.JPG';
import scandinave1 from '../Images/scandinave1.JPG';
import scandinave2 from '../Images/scandinave2.JPG';
import scandinave3 from '../Images/scandinave3.JPG';
import scandinave4 from '../Images/scandinave4.JPG' ;
import scandinave5 from '../Images/scandinave5.jpg';


export default function PrivateRoom(){
    const picturesList1 = [cocoon1, cocoon2, cocoon3, cocoon4];
    const picturesList2 = [scandinave1, scandinave2, scandinave3, scandinave4, scandinave5];
    window.scrollTo(0, 0);

    return(
        <div className="PrivateContainerRoom">
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
                    <div className='cocoon-diapo'><Diaporama picturesList ={picturesList2}/></div>
                </div>
                <iframe  height='750' width='100%' src='https://widget.itea.fr/widget.php?key=amkkhds7&numGite=2697&widget-itea=prix' ></iframe> 
            </div>
        </div>
    );
};