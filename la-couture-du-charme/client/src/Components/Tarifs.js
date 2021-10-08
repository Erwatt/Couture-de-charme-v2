import '../CSS/Tarifs.scss';
import React from 'react';
// import tarif from '../Images/Tarifs.PNG'


export default function Tarifs(){
    window.scrollTo(0, 0);
    return(
        <div className="containerTarif">
            <h1 className="titreCouture">La Couture Du Charme</h1>
            <div className="containerWhiteTarif">
                <p className="containerTitleESPACE"><b><div className="elementTitleESPACE">ESPACE BIEN-ÊTRE & CHAMBRES D'HOTES </div><div className="elementTitleESPACE">SAMEON</div></b></p>
                <div className="conatinerBloc2">
                    <div className="bloc2Left">
                        <p className="titleCoutureDuCharme"><b>LA COUTURE DU CHARME</b></p>
                        <div className="flexColumn">
                            <div>1400 rue de Beaumetz</div>
                            <div>59310 Saméon</div>
                            {/* <div>Le Spa : 07 52 09 07 50</div>
                            <div>spa@coutureducharme.fr</div> */}
                            <ul className="tarif_list marginTop">Les chambres : <li className="tarif_li">06 31 84 42 39</li><li className="tarif_li">coutureducharme@gmail.com</li></ul>
                        </div>
                    </div>
                    <div className="bloc2Right">
                        <p className="textTitleReservation">RÉSERVATION SPA </p>
                        <div>par téléphone, email ou en ligne : </div>
                        <div><a href="https://calendly.com/coutureducharme-le-spa"><b>calendly.com/coutureducharme-le-spa</b></a></div>
                        <ul className="tarif_list">Le spa : <li className="tarif_li">07 52 09 07 50</li><li className="tarif_li">spa@coutureducharme.fr</li></ul>
                    </div>
                </div>
                <div className="borderBlack"></div>
                <p className="containerTitleESPACE"><div className="elementTitleESPACE"><b>ESPACE DETENTE PISCINE SAUNA SPA</b></div>
                <div className="elementTitleESPACE"><b>CRÉNEAU PRIVATIF POUR 2 PERSONNES</b></div></p>
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
                                <div>(Contactez nous si plus de 6 personnes)</div>
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
                                <div ><b>Supplément massage bien-être</b></div>
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
                </div>
                <div className="borderBlack"></div>
                <p className="containerTitleESPACE"><b>NUITÉE ET PETIT-DÉJEUNER</b></p>
                <div className="flexColumn">
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>FRAGOLE</b><div>(RdC, max 3 p)</div></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>Semaine</div>
                                <div>Weekend</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>75 € à 155 €</div>
                                <div>90 € à 160 €</div>
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>SCANDINAVE</b><div>(Étage, max 4 p)</div></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>Semaine</div>
                                <div>Weekend</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>75 € à 175 €</div>
                                <div>90 € à 180 €</div>
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>COCOON</b><div>(Étage, max 5 p)</div></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>Semaine</div>
                                <div>Weekend</div>
                            </div>
                            <div className="flexColumn" id="elementRow3">
                                <div>75 € à 185 €</div>
                                <div>90 € à 200 €</div>     
                            </div>
                        </div>
                    </div>
                    <div className="elmentCreneau">
                        <div className="flexRow">
                            <div id="elementRow1"><b>Enfants moins de 2 ans</b><div>1 lit bébé par chambre</div></div>
                            <div className="flexColumn" id="elementRow2">
                                <div>Gratuit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="TaxeSéjour">Taxe de séjour : 0.22 €/jour/adulte incluse</p>
                <div className="borderBlack"></div>
                <div className="flexRow">
                    <div className="flexColumn center">
                        <p className="containerTitleESPACE"><b>FORFAIT CENTRE DE DETENTE & NUITÉE (2 personnes)</b></p>
                        <div className="center">2 h Centre de détente + nuitée en chambres d'hôtes + pdj</div>
                        <div className="center tarifAllInclusive">semaine: 195 € - le weekend : 210 € </div>
                    </div>
                </div>
            </div>
        </div>
    )
}