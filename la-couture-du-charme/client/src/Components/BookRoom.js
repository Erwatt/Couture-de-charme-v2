import '../CSS/Book2.scss';
import React, { useState } from 'react';
import cocoon3 from '../Images/cocoon3.JPG';
import scandinave3 from '../Images/scandinave3.JPG';



function BookRoom(){
    window.scrollTo(0, 0);
    return(
        <div>
            <div className="containerBookRoom">
                <div className="ElementRoom">
                    <p className="el">Fragole</p>
                    <div className="el">
                        <img className="imgRoom"  src={cocoon3}></img>
                    </div>
                    <div className="el"><iframe className="containerIframe"  src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=1' ></iframe></div>
                </div>
                <div className="ElementRoom">
                    <p className="el">Scandinave</p>
                    <div className="el">
                        <img className="imgRoom" src={scandinave3}></img>
                    </div>
                    <div className="el"><iframe  className="containerIframe"  src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=2' ></iframe></div>
                </div>
                <div className="ElementRoom">
                    <p className="el">Cocoon</p>
                    <div className="el">
                        <img  className="imgRoom" src={cocoon3}></img>
                    </div>
                    <div className="el"><iframe  className="containerIframe"  src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=3' ></iframe></div>
                </div>
                
            </div>
            <div className="conatierButton">
                <p className="bookroomTxt">Pour réserver une chambre merci de d'appeler au 07 52 09 07 50</p>
                {/* <p className="ButtonBook2">Réserver</p> */}
            </div>
        </div>
    )
}
export default BookRoom;