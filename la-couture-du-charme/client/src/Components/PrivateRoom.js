import React from 'react';
import { useState } from 'react';
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

    
    const[prix1,setPrix1]=useState(false);
    const[prix2,setPrix2]=useState(false);
    const[prix3,setPrix3]=useState(false);
    const picturesList1 = [cocoon1, cocoon2, cocoon3, cocoon4];
    const picturesList2 = [scandinave1, scandinave2, scandinave3, scandinave4, scandinave5];
    const ShowPrice1 = () => {if (prix1){setPrix1(false)}
                            else{setPrix1(true)}};
    const ShowPrice2 = () => {if (prix2){setPrix2(false)}
                            else{setPrix2(true)}};
    const ShowPrice3 = () => {if (prix3){setPrix3(false)}
                            else{setPrix3(true)}};

    return(
        <div className="PrivateContainerRoom">
                <div className='room'>
                <div className="RoomHeader">Chambres<b></b></div>
                <div className="cocoon-box">
                    <h1>COCOON</h1>
                    <div className="cocoon-diapo"><Diaporama picturesList ={picturesList1}/></div>
                    <div className="cocoon-info">
                        <div className="cocoon1">
                            <h2>Chambre 1 : Univers Fragole Au Rez-de-chaussée Accessible Pmr</h2>
                            <p>Entrée indépendante. Au rez-de-chaussée, accessible aux personnes à mobilité réduite. 1 lit 160 X 200, wc indépendants, salle d'eau avec vasque et douche à l'italienne (180 x 150). Possibilité d'un lit supplémentaire de 90 x 200. Wifi, TV écran plat.</p>
                        </div>
                        <div className="cocoon2">
                            <li>1x Lit simple lits 90cm</li>
                            <li>1x Lit double lits 160cm ou supérieur</li>
                            <li>WC privé</li>
                            <li>Douche privée</li>
                            <li>Télévision privée</li>
                            <li>Cuisine commune</li>
                        </div>
                        <div className="cocoon3" onClick={()=>ShowPrice1()}>
                            <b>A partir de 95€</b><br></br>
                            <p>Par nuit base 2 personnes</p>
                            <p>Petits déjeuners inclus</p>
                            <p>Voir le détail des prix</p>
                        </div>
                    </div>
                    {prix1?<div>hola qué tal?</div>:false}
                </div>
                <div className="fragole-box">
                    <h1>FRAGOLE</h1>
                    <div className='fragole-diapo'><Diaporama picturesList ={picturesList1}/></div>
                    <div className="fragole-info">
                        <div className="fragole1">rdb</div>
                        <div className="fragole2">vrdvr</div>
                        <div className="fragole3" onClick={()=>ShowPrice2()}>cliquez ici</div>
                    </div>
                    {prix2?<div>como te llamas?</div>:false}
                </div>
                <div className="scandinave-box">
                    <h1>SCANDINAVE</h1>
                    <div className='scandinave-diapo'><Diaporama picturesList ={picturesList2}/></div>
                    <div className="scandinave-info">
                        <div className="scandinave1">rdb</div>
                        <div className="scandinave2">vrdvr</div>
                        <div className="scandinave3" onClick={()=>ShowPrice3()}>cliquez ici</div>
                    </div>
                    {prix3?<div>cuandos anos tienes?</div>:false}
                </div>
                <iframe  height='750' width='100%' src='https://widget.itea.fr/widget.php?key=amkkhds7&numGite=2697&widget-itea=prix' ></iframe> 
            </div>
        </div>
    );
};