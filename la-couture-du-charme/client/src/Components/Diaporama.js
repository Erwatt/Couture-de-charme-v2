import React from "react";
import {useState} from "react";
import '../CSS/Diaporama.scss';
import arrow from '../Images/arrow.png';


function Diaporama({picturesList, width, height}){
    const images = picturesList;
    const [posDiapo, setPosDiapo] = useState(0);
    return (
        
        <div className="Diaporama">
            
                <div className="containerArrow" id="back"><img src={arrow} onClick={() => setPosDiapo(posDiapo - 1)} className="fleche_retour" alt="retour"/></div>
            
            
                <div className="containerPhoto"><img loading="lazy" src={images[Math.abs(posDiapo % images.length)]} alt="diaporama" width={width} height={height} className="Diaporama_img"/></div>
            
            <div className="containerArrow" id="next"><img src={arrow} onClick={() => setPosDiapo(posDiapo + 1)} className="fleche_suivant" alt="suivant"/></div>
            
            {/* {console.log(Math.abs(posDiapo % images.length))} */}
        </div>
        
    );
}

export default Diaporama;