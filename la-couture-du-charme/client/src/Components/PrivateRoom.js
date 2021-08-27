import React from 'react';
import { useState } from 'react';
import Diaporama from './Diaporama';
import '../CSS/PrivateRoom.scss';
import spa from '../Images/spa.jpg';
import cocoon1 from '../Images/cocoon1.jpg';
import cocoon2 from '../Images/cocoon2.JPG';
import cocoon3 from '../Images/cocoon3.JPG';
import cocoon4 from '../Images/cocoon4.JPG';
import scandinave1 from '../Images/scandinave1.JPG';
import scandinave2 from '../Images/scandinave2.JPG';
import scandinave3 from '../Images/scandinave3.JPG';
import scandinave4 from '../Images/scandinave4.JPG' ;
import scandinave5 from '../Images/scandinave5.jpg';
import fragole from '../Images/fragole.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function PrivateRoom(){

    window.scrollTo(0,0);

    
    // const[prix1,setPrix1]=useState(false);
    // const[prix2,setPrix2]=useState(false);
    // const[prix3,setPrix3]=useState(false);
    const picturesList = [cocoon3, fragole, scandinave3];
    // const picturesList2 = [scandinave1, scandinave2, scandinave3, scandinave4, scandinave5];
    // const ShowPrice1 = () => {if (prix1){setPrix1(false)}
    //                         else{setPrix1(true)}};
    // const ShowPrice2 = () => {if (prix2){setPrix2(false)}
    //                         else{setPrix2(true)}};
    // const ShowPrice3 = () => {if (prix3){setPrix3(false)}
    //                         else{setPrix3(true)}};

    return(
        <div className="PrivateContainerRoom">
                {/* <div className='room'>
                <div className="cocoon-box">
                    <h2>Chambre 1 : Univers Fragole Au Rez-de-chaussée Accessible Pmr</h2>
                    <div className="cocoon-info">
                        <div className="cocoon1">
                            <p>Entrée indépendante. Au rez-de-chaussée, accessible aux personnes à mobilité réduite. 1 lit 160 X 200, wc indépendants, salle d'eau avec vasque et douche à l'italienne (180 x 150). Possibilité d'un lit supplémentaire de 90 x 200. Wifi, TV écran plat.</p>
                            <div className="cocoon-diapo"><Diaporama picturesList ={picturesList1}/></div>
                        </div>
                        <div className="cocoon2">
                            <li>1x Lit simple lits 90cm</li>
                            <li>1x Lit double lits 160cm ou supérieur</li>
                            <li>WC privé</li>
                            <li>Douche privée</li>
                            <li>Télévision privée</li>
                            <li>Cuisine commune</li>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <b>A partir de 95€</b>
                                <p>Par nuit base 2 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                            <div className="cocoon32" onClick={()=>ShowPrice1()}>
                                <p>Voir le détail des prix</p>
                            </div>
                        </div>
                    </div>
                    {prix1?
                        <div className="prix" data-aos="fade-right" data-aos-duration="1000">
                            <div className="prix1">
                                <p>1 pers : 1€</p>
                                <p>2 pers : 2€</p>
                            </div>
                            <div className="prix2">
                                <p>3 pers : 3€</p>
                                <p>4 pers : 4€</p>
                            </div>
                        </div>:false}
                </div>
                <div className="cocoon-box">
                    <h2>Chambre 2 : Univers Scandinave à L'étage</h2>
                    <div className="cocoon-info">
                        <div className="cocoon1">
                            <p>Chambre Scandinave à l'étage : 2 lits 90/200 ou 1 lit 180/200, wc indépendant, salle d'eau (vasque, douche plate 180 X 80), possibilité 2 lits 90x200cm supplémentaires. Wifi. TV écran plat.</p>
                            <div className="cocoon-diapo"><Diaporama picturesList ={picturesList1}/></div>
                        </div>
                        <div className="cocoon2">
                            <li>2x Lit simple lits 90cm</li>
                            <li>1x Lit double lits 160cm ou supérieur</li>
                            <li>2x Lit bébé</li>
                            <li>WC privé</li>
                            <li>Douche privée</li>
                            <li>Télévision privée</li>
                            <li>Douche commune</li>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <b>A partir de 95€</b>
                                <p>Par nuit base 2 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                            <div className="cocoon32" onClick={()=>ShowPrice2()}>
                                <p>Voir le détail des prix</p>
                            </div>
                        </div>
                    </div>
                    {prix2?
                        <div className="prix" data-aos="fade-right" data-aos-duration="1000">
                            <div className="prix1">
                                <p>1 pers : 1€</p>
                                <p>2 pers : 2€</p>
                            </div>
                            <div className="prix2">
                                <p>3 pers : 3€</p>
                                <p>4 pers : 4€</p>
                            </div>
                        </div>:false}
                </div>
                <div className="scandinave-box">
                    <h2>Chambre 3 : Univers Cocoon à L'étage</h2>
                    <div className="cocoon-info">
                        <div className="cocoon1">
                            <p>Chambre Cocoon à l'étage : 2 lits 90 x 200 (ou 1 lit 180), wc indépendant, salle de bains (vasque, baignoire) possibilité 3 lits 90x200cm supplémentaire. TV écran plat par chambre. Wifi.</p>
                            <div className="cocoon-diapo"><Diaporama picturesList ={picturesList2}/></div>
                        </div>
                        <div className="cocoon2">
                            <li>3x Lit simple lits 90cm</li>
                            <li>1x Lit double lits 160cm ou supérieur</li>
                            <li>2x Lit bébé</li>
                            <li>Salle de bain privée</li>
                            <li>WC privé</li>
                            <li>Télévision privée</li>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <b>A partir de 100€</b>
                                <p>Par nuit base 2 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                            <div className="cocoon32" onClick={()=>ShowPrice3()}>
                                <p>Voir le détail des prix</p>
                            </div>
                        </div>
                    </div>
                    {prix3?
                        <div className="prix" data-aos="fade-right" data-aos-duration="1000">
                            <div className="prix1">
                                <p>1 pers : 1€</p>
                                <p>2 pers : 2€</p>
                            </div>
                            <div className="prix2">
                                <p>3 pers : 3€</p>
                                <p>4 pers : 4€</p>
                            </div>
                        </div>:false}
                </div>
            </div> */}
            <div className="privateRoomBox">
                <div className="privateRoomDiapo"><Diaporama  picturesList ={picturesList}/></div>
                <p className="privateRoomBoxText">Au cœur du Parc National Scarpe Escaut, nous vous accueillons dans un cadre verdoyant, calme et chaleureux. Vous serez séduit par l'espace de nos 3 chambres, et le choix de la décoration.</p>
            </div>
            <div className="privateRoomBox">
                <div className="subPrivateRoomBox">
                    <p>Les familles sont les bienvenues, avec la possibilité de préparer jusque 5 couchages en chambre COCOON, ou 4 personnes en chambre SCANDINAVE.</p>
                    <p>La chambre FRAGOLE, située au RdC, est quant à elle accessible PMR, tout comme l’ensemble de notre espace table d’hôte, notre grand parking clos et nos accès extérieurs.</p>
                    <p>Chaque chambre (superficie de 35-40 m²) dispose de lits king size, de salles de bain modernes, d’une connexion internet wifi (fibre), TV et console bureau.</p>
                    <p>La proximité de l’autoroute A23 (sortie Saint Amand / Marchiennes), de la gare SNCF de Rosult et de la Zone d’Activité de Sars et Rosières facilitera vos déplacements professionnels.</p>
                </div>
                <div className="privateRoomDiapo"><Diaporama  picturesList ={picturesList}/></div>
            </div>
            <div className="privateRoomBox">
                <img src={cocoon1} alt="test" className="privateRoomDiapo"/>
                <div className="subPrivateRoomBox">
                    <p className="privateRoomBoxText2">Pièce de vie de 40 m² au rez de chaussée avec kitchenette (micro-onde, réfrigérateur, lave-vaisselle, machine à café, bouilloire, vaisselle), espace repas et babyfoot. Accès terrasse, salon de jardin, et espace pique-nique avec jeux enfants en saison sur notre terrain de 4000 m².</p>
                    <p>Le petit déjeuner inclus est servi dès 7h en semaine, 8h30 le weekend. Possibilité de plateau repas en table d’hôtes sur demande (à prévoir 48h à l’avance).</p>
                </div>
            </div>
            <img src={spa} alt="test" className="privateRoomDiapo2"/>
            <p>Pour vos soirées en amoureux, ou entre amis, n’hésitez pas à consulter notre planning spa privatif avec piscine !</p>
            <p>Selon disponibilité et avec supplément, possibilité de réserver un créneau sauna, spa, massage bien-être !</p>
        </div>
    );
};