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
                    <p align="justify">Nos <b>3 chambres</b> disposent d'un <b>accès indépendant</b> et d'une <b>pièce de vie</b> réservée à nos hôtes. Tout l'intérêt des chambres d'hôtes est de <b>partager des moments de vie</b>, vous faire découvrir les environs et des <b>produits locaux</b>. </p>
                    <p align="justify"> Saviez-vous qu'un <b>SPA privatif</b> est accessible à nos hôtes sur réservation (avec supplément) ?</p>
                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 className="Static" align="center">Dormir à la campagne</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Au cœur du <b>Parc National Scarpe Escaut</b>, nous vous accueillons dans un cadre verdoyant, calme et chaleureux. Vous serez <b>séduit par l'espace</b> de nos 3 chambres, et le choix de la décoration. </p>
                                <p> Pas de stress pour stationner, nous disposons d'un grand parking clos, fermé par portail digicode et d'un emplacement vélos. Vous accédez alors à nos Trois chambres, par une entrée indépendante.</p> 
                                <p>La <b>proximité de l’autoroute A23</b> (sortie Saint Amand / Marchiennes), de la <b>gare SNCF de Rosult</b> et de la <b>Zone d’Activité de Sars et Rosières</b> facilitera vos déplacements professionnels.</p>
                            </p>
                            <img src={House} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-right" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 className="Static" align="center">Nos 3 chambres</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify"></p>
                                <p>Chaque chambre (superficie de 35-40 m²) dispose de <b>lits king size</b>, de salles de bain modernes, d’une connexion internet wifi (fibre). </p>
                                <ul>
                                    <li><a href="#fragole"><b>FRAGOLE</b></a> : (max. 3 personnes), au rez-de-chaussée, accès PMR.</li>
                                    <li><a href="#scandinave"><b>SCANDINAVE</b></a> : (max. 4 personnes), à l'étage.</li>
                                    <li><a href="#cocoon"><b>COCOON</b></a> : (max. 5 personnes), à l'étage.</li>
                                </ul>
                            </p>
                            <img src={Poufs} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 className="Static" align="center">Notre Table d'hôtes</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify"><b>Pièce de vie de 40 m² au rez de chaussée avec kitchenette</b> (micro-onde, réfrigérateur, lave-vaisselle, machine à café, bouilloire, vaisselle), espace repas et babyfoot.</p>
                                <p align="justify"> <b>Accès terrasse</b>, salon de jardin, et espace pique-nique avec <b>jeux enfants en saison</b> sur notre terrain de 4000 m². </p>
                                <p align="justify">Le <b>petit déjeuner</b> est servi dès 7h15 en semaine, 8h30 le weekend. Possibilité de <b>repas en table d’hôtes</b> sur demande (à prévoir 48h à l’avance).</p>
                            </p>
                            <img src={Poufs} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="containerBookRoom">
                    <div className="ElementRoom">
                        <h3 id="fragole"><b>FRAGOLE</b></h3>
                        <div className="cocoon1">
                            <p>RdC, accès PMR</p>
                        </div>
                        <div className="cocoon2">
                            <ul>
                                <li>1 Lit double 160 x 200 </li>
                                <li>Poss. ajout 1 lit simple 90 x 200</li>
                                <li>Lit bébé sur demande </li>
                                <li>WC indépendant</li>
                                <li>Salle d'eau avec vasque et douche à l'italienne (180x150)</li>
                                <li>TV écran plat</li>
                                <li>Wifi (fibre)</li>
                                <li>Accès pièce commune</li>
                            </ul>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <p>A partir de 80 €</p>
                                <p>Par nuit base 1 personne</p>
                                <p>Petit déjeuner inclus</p>
                            </div>
                        </div>

                        <div className="ContainerEl">

                            <div className="el">
                                <img className="imgRoombis" src={fragole}></img>
                            </div>
                            <div className="el"><iframe className="containerIframe" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=1' ></iframe></div>

                        </div>
                    </div>


                    <div className="ElementRoom">
                        <h3 id="scandinave"><b>SCANDINAVE</b></h3>
                        <div className="cocoon1">
                            <p>Chambre Scandinave à l'étage </p>
                        </div>
                        <div className="cocoon2">
                            <ul>
                                <li>1x lit double 180x200</li>
                                <li>Poss. ajout 2 Lits simples 90x200</li>
                                <li>Lit bébé sur demande</li>
                                <li>WC indépendant</li>
                                <li>Salle d'eau avec vasque et douche à l'italienne (180x80)</li>
                                <li>TV écran plat</li>
                                <li>Wifi (fibre)</li>
                                <li>Accès pièce commune</li>
                            </ul>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <p>A partir de 80€</p>
                                <p>Par nuit base 1 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                        </div>

                        <div className="ContainerEl">
                            <div className="el">
                                <img className="imgRoom" src={scandinave3}></img>
                            </div>
                            <div className="el"><iframe className="containerIframe" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=2' ></iframe></div>
                        </div>
                    </div>

                    <div className="ElementRoom">
                        <h3 id="cocoon"><b>COCOON</b></h3>

                        <div className="cocoon1">
                            <p>Chambre Cocoon à l'étage</p>
                        </div>
                        <div className="cocoon2">
                            <ul>
                                <li>1x lit double 180x200</li>
                                <li>Poss. ajout 2 Lits simples 90x200</li>
                                <li>ou 1 lit 160x200 + 1 lit 90x200</li>
                                <li>Lit bébé sur demande</li>
                                <li>WC indépendant</li>
                                <li>Salle d'eau avec vasque et baignoire</li>
                                <li>TV écran plat</li>
                                <li>Wifi (fibre)</li>
                                <li>Accès pièce commune</li>
                            </ul>
                        </div>
                        <div className="cocoon3">
                            <div className="cocoon31">
                                <p>A partir de 80€</p>
                                <p>Par nuit base 1 personnes</p>
                                <p>Petits déjeuners inclus</p>
                            </div>
                        </div>

                        <div className="ContainerEl">
                            <div className="el">
                                <img className="imgRoom" src={cocoon3}></img>
                            </div>
                            <div className="el"><iframe className="containerIframe" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=3' ></iframe></div>
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