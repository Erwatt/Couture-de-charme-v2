import * as React from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'

//On importe les composants
import Adresse from '../Components/adresse'


//On importe les images
import cocoon3 from '../Images/cocoon3.JPG'
import scandinave3 from '../Images/scandinave3.JPG'
import fragole from '../Images/fragole.jpeg'
import House from '../Images/house1.jpg'
import Poufs from '../Images/poufs.jpg'

//On importe le css
import '../CSS/PrivateRoom.scss'


export default function ChambresHotes() {

    // window.scrollTo(0, 0);

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Chambres d’hôtes entre St Amand les Eaux et Orchies (59)</title>
                <meta name="description" content="Dans un cadre spacieux et moderne, reposez-vous dans nos chambres d’hôtes situées à Saméon au cœur de la campagne du Pévèle à proximité des accès autoroutiers." />
                <html lang="fr" />
            </Helmet>

            <div className="MainHome">
                <div className="TitrePage">
                    <h1 align="center">Chambres d'Hôtes</h1>
                    <h2 align="center">Pourquoi choisir une chambre d'hôtes ?</h2>
                    <p align="justify">Une chambre d'hôte est une <b>chambre meublée</b> située dans la maison du propriétaire. Nos chambres disposent d'un <b>accès indépendant</b> et d'une <b>pièce de vie</b> réservée à nos hôtes. Tout l'intérêt des chambres d'hôtes est de <b>partager des moments de vie</b>, vous faire découvrir les environs et des <b>produits locaux</b>. Saviez-vous qu'un <b>SPA privatif</b> est accessible sur réservation à nos hôtes ?</p>
                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 className="Static" align="center">Dormir à la campagne</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Au cœur du <b>Parc National Scarpe Escaut</b>, nous vous accueillons dans un cadre verdoyant, calme et chaleureux. Vous serez <b>séduit par l'espace</b> de nos 3 chambres, et le choix de la décoration. Chaque chambre (superficie de 35-40 m²) dispose de <b>lits king size</b>, de salles de bain modernes, d’une connexion internet wifi (fibre), TV et console bureau. La <b>proximité de l’autoroute A23</b> (sortie Saint Amand / Marchiennes), de la <b>gare SNCF de Rosult</b> et de la Zone d’Activité de Sars et Rosières facilitera vos déplacements professionnels.</p>
                            </p>
                            <img src={House} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-right" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 className="Static" align="center">3 chambres</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Trois chambres avec <b>salles de bains privatives</b> :</p>
                                <ul>
                                    <li><a href="#fragole">FRAGOLE</a> : <b>Max. 3 personnes</b>, située au rez-de-chaussée, elle dispose d'un accès PMR.</li>
                                    <li><a href="#scandinave">SCANDINAVE</a> : <b>Max. 4 personnes</b>, située à l'étage sans ascenseur.</li>
                                    <li><a href="#cocoon">COCOON</a> : <b>Max. 5 personnes</b>, située à l'étage sans ascendeur.</li>
                                </ul>
                            </p>
                            <img src={Poufs} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 className="Static" align="center">Petit dejeuner inclus</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify"><b>Pièce de vie de 40 m² au rez de chaussée avec kitchenette</b> (micro-onde, réfrigérateur, lave-vaisselle, machine à café, bouilloire, vaisselle), espace repas et babyfoot. <b>Accès terrasse</b>, salon de jardin, et espace pique-nique avec <b>jeux enfants en saison</b> sur notre terrain de 4000 m². Le <b>petit déjeuner</b> est servi dès 7h en semaine, 8h30 le weekend. Possibilité de <b>plateau repas en table d’hôtes</b> sur demande (à prévoir 48h à l’avance).</p>
                            </p>
                            <img src={Poufs} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="containerBookRoom">
                    <div className="ElementRoom">
                        <h3 id="fragole"><b>FRAGOLE</b></h3>
                        <div className="cocoon1">
                            <p>Entrée indépendante. Au rez-de-chaussée, accessible aux personnes à mobilité réduite. 1 lit 160 X 200, wc indépendants, salle d'eau avec vasque et douche à l'italienne (180 x 150). Possibilité d'un lit supplémentaire de 90 x 200. Wifi, TV écran plat.</p>
                        </div>
                        <div className="cocoon2">
                            <ul>
                                <li>1x Lit simple lits 90cm</li>
                                <li>1x Lit double lits 160cm ou supérieur</li>
                                <li>WC privé</li>
                                <li>Douche privée</li>
                                <li>Télévision privée</li>
                                <li>Cuisine commune</li>
                            </ul>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <p>A partir de 95€</p>
                                <p>Par nuit base 2 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                        </div>

                        <div className="ContainerEl">

                            <div className="el">
                                <img alt="Fragole" className="imgRoombis" src={fragole}></img>
                            </div>
                            <div className="el"><iframe title="itea-fragole" className="containerIframe" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=1' ></iframe></div>

                        </div>
                    </div>


                    <div className="ElementRoom">
                        <h3 id="scandinave"><b>SCANDINAVE</b></h3>
                        <div className="cocoon1">
                            <p>Chambre Scandinave à l'étage : 2 lits 90/200 ou 1 lit 180/200, wc indépendant, salle d'eau (vasque, douche plate 180 X 80), possibilité 2 lits 90x200cm supplémentaires. Wifi. TV écran plat.</p>
                        </div>
                        <div className="cocoon2">
                            <ul>
                                <li>2x Lit simple lits 90cm</li>
                                <li>1x Lit double lits 160cm ou supérieur</li>
                                <li>2x Lit bébé</li>
                                <li>WC privé</li>
                                <li>Douche privée</li>
                                <li>Télévision privée</li>
                                <li>Douche commune</li>
                            </ul>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <p>A partir de 95€</p>
                                <p>Par nuit base 2 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                        </div>

                        <div className="ContainerEl">
                            <div className="el">
                                <img alt="scandinave" className="imgRoom" src={scandinave3}></img>
                            </div>
                            <div className="el"><iframe title="itea-scandinave" className="containerIframe" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=2' ></iframe></div>
                        </div>
                    </div>

                    <div className="ElementRoom">
                        <h3 id="cocoon"><b>COCOON</b></h3>

                        <div className="cocoon1">
                            <p>Chambre Cocoon à l'étage : 2 lits 90 x 200 (ou 1 lit 180), wc indépendant, salle de bains (vasque, baignoire) possibilité 3 lits 90x200cm supplémentaire. TV écran plat par chambre. Wifi.</p>
                        </div>
                        <div className="cocoon2">
                            <ul>
                                <li>3x Lit simple lits 90cm</li>
                                <li>1x Lit double lits 160cm ou supérieur</li>
                                <li>2x Lit bébé</li>
                                <li>Salle de bain privée</li>
                                <li>WC privé</li>
                                <li>Télévision privée</li>
                            </ul>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <p>A partir de 100€</p>
                                <p>Par nuit base 2 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                        </div>

                        <div className="ContainerEl">
                            <div className="el">
                                <img alt="cocoon" className="imgRoom" src={cocoon3}></img>
                            </div>
                            <div className="el"><iframe title="itea-cocoon" className="containerIframe" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=3' ></iframe></div>
                        </div>
                    </div>

                </div>
                <div className="conatierButton">
                    <p className="bookroomTxt">Pour réserver une chambre merci d'appeler au 06 31 84 42 39 ou par mail : coutureducharme@gmail.com</p>
                    {/* <p className="ButtonBook2">Réserver</p> */}
                </div>


            </div>

            <Adresse />

        </HelmetProvider >
    )
}