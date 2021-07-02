import React from "react";
import {useState} from "react";
import '../CSS/Diaporama.css';
import arrow from '../Images/arrow.png';


function Diaporama({picturesList}){
    const images = picturesList;
    const [posDiapo, setPosDiapo] = useState(0);
    return (
        <div className="Diaporama">
            <div className="element_Diaporama">
                <img src={arrow} onClick={() => setPosDiapo(posDiapo - 1)} className="fleche_retour" alt="retour"/>
            </div>
            <div className="element_Diaporama">
                <img src={images[Math.abs(posDiapo % images.length)]} alt="diaporama" className="Diaporama_img"/>
            </div>
            <div className="element_Diaporama">
                <img src={arrow} onClick={() => setPosDiapo(posDiapo + 1)} className="fleche_suivant" alt="suivant"/>
            </div>
            {/* {console.log(Math.abs(posDiapo % images.length))} */}
        </div>
    );
}

export default Diaporama;