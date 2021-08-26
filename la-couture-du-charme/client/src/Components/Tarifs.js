import '../CSS/Tarifs.scss';
import React, { useState } from 'react';
import tarif from '../Images/Tarifs.PNG'


export default function Tarifs(){
    window.scrollTo(0, 0);
    return(
        <div className="containerTarif">
            <h1 className="titreCouture">La Couture Du Charme</h1>
            <div className="containerWhiteTarif">
                <p className="conainerTitleESPACE"><b><div className="elementTitleESPACE">ESPACE BIEN-ËTRE • SAM2ON</div><div className="elementTitleESPACE">ACC7S PRIVATIF SPA/SAUNA/PISCINE</div></b></p>
                <div className="conatinerBloc2">
                    <div className="bloc2Left">
                        <p className="titleCoutureDuCharme"><b>LA COUTURE DU CHARME</b></p>
                        <div className="flexColumn">
                            <div>1400 rue de Beaumetz</div>
                            <div>59310 Saméon</div>
                            <div>07 52 09 07 50</div>
                            <div>spa@coutureducharme.fr</div>
                        </div>
                    </div>
                    <div className="bloc2Right">
                        <p className="textTitleReservation">RESERVATION</p>
                        <div>par téléphone, email ou en ligne : </div>
                        <div><b>calendly.com/coutureducharme-le-spa</b></div>
                    </div>
                </div>
                <div className="borderBlack"></div>
                <p className="conainerTitleESPACE"><b>CRENEAU PRIVATIF POUR 2 PERSONNES</b></p>
                <div className="flexColumn">
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>Semaine avant 17h</b></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>1 h 30</div>
                                <div>3 h 00</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>80 €</div>
                                <div>150 €</div>
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>Semaine dès 17h</b></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>1 h 30</div>
                                <div>2 h 00</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>90 €</div>
                                <div>110 €</div>
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>Weekend</b></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>2 h</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>130 €</div>
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div className="flexColumn" id="elementRow1">
                                <div ><b>personne supplémentaire</b></div>
                                <div>(max 8 personnes)</div>
                            </div>
                           
                            <div className="flexColumn" id="elementRow2">
                                
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>20 €</div>
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div className="flexColumn" id="elementRow1">
                                <div ><b>Supplément modelage</b></div>
                                <div>solo ou duo, durant le créneau privatif</div>
                                <div>30' par personne</div>
                            </div>
                           
                            <div className="flexColumn" id="elementRow2">
                                <div>30'</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>35 €</div>
                            </div>
                        </div>
                    </div>
                <div>
                <div className="borderBlack"></div>
                <div className="flexRow">
                    <div className="flexColumn">
                        <p className="conainerTitleESPACE"><b>FORFAIT SPA & NUITEE</b></p>
                        <div>Accès spa + nuitée en chambres d'hôtes</div>
                        <div> + petit déjeuner + champagne</div>
                        <div>Nous contacter : www.coutureducharme.fr</div>
                    </div>
                   
                </div>
                

            </div>
                </div>
            
            </div>
            

        </div>
    )
}