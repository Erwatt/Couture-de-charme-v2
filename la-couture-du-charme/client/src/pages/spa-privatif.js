import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//On importe les composants
import Adresse from '../Components/adresse'
import AOS from 'aos'


//On importe les images
import spa from '../Images/spa.jpg';
import poufs from '../Images/poufs.jpg';
import sauna from '../Images/sauna.jpg';
import piscine from '../Images/piscine.jpg';
import massage2 from '../Images/massage2.jpg';

//On importe le CSS
import '../CSS/Home.scss'
import 'aos/dist/aos.css'


export default function SpaPrivatif() {

    // window.scrollTo(0, 0);

        //On initialise AOS (mouvement div)
        useEffect(() => {
            AOS.init({duration:1000});
        }, [])
    

    return (
        <HelmetProvider>

            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SPA Privatif avec Jacuzzi à Saméon (59)</title>
                <meta name="description" content="Privatisez un SPA avec Jacuzzi quelques heures en famille, entre amis ou un team building. Situé à Saméon dans le Nord, entre Orchies et Saint-Amand-les-Eaux." />
                <html lang="fr" />

            </Helmet>

            <div className="MainHome">

                <div className="TitrePage">
                    <h1 align="center">SPA privatif avec Jaccuzzi</h1>
                    <h2 align="center">10 personnes maximum</h2>
                    <p align="center">Entre <b>amis</b>, en <b>famille</b>, en <b>amoureux</b> ou pour vos évènements de <b>team building</b>, le SPA privatif de la Couture du Charme est l'endroit détente idéal pour tous vos évènements !</p>
                    <p align="center"> La Couture du Charme est un lieu reposant, doté d'un <b>SPA privatif de 130m2</b> comprenant un jacuzzi, une piscine, un sauna. Vous pourrez réserver des massages, commander une boisson au <b>bord de la piscine</b> et même prolonger la détente en choisissant de séjourner dans l'une de nos <b>chambres d'hôtes.</b></p>
                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Jacuzzi 6 places</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify"><b>Excellent remède au stress</b>, notre spa au design et au confort soigné vous permet de relâcher la pression et vous prélasser dans une eau à 37°C.</p>
                                <p align="justify">Chacune de ses <b>6 places dynamiques</b> offre une qualité de massage permettant d’atteindre un haut niveau de performance grâce à des spécificités méticuleusement étudiées : <b>multi jets hydrothérapie</b>, spots de chromothérapie...</p>
                            </p>
                            <img src={spa} alt="jacuzzi" width="580" height="350" />
                        </div>

                    </div>

                </div>

                {/* <div className="ContainerBackground" data-aos="fade-right" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Piscine chauffée avec hydrothérapie</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Le bassin de 10 x 4 m, <b>chauffé à 30°C</b> tout au long de l’année vous procure détente et relaxation grâce à :</p>
                                <p align="justify">Des jets d’hydromassage latéraux : <b>5 jets de massage spécifiques</b> pour le bas du dos, les muscles fessiers, la sangle abdominale et les mollets.</p>
                                <p align="justify">Une cascade : <b>effet visuel captivant et relaxant</b>, tout en permettant un bon massage des épaules et de la nuque.</p>
                                <p align="justify"><b>Nage à contre-courant</b> : pour une pause sportive.</p>
                            </p>
                            <img src={piscine} alt="piscine" width="580" height="350"/>
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Sauna Finlandais</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify"><b>Laissez la chaleur du sauna vous envelopper</b> et profitez de son effet bénéfique et purifiant sur votre corps.</p>
                                <p align="justify">Les <b>essences de bois</b> employées lors de la construction de cet espace spacieux vous envouteront par leurs délicates effluves.</p>
                            </p>
                            <img src={sauna} alt="sauna" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-right" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Massages bien-être</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Invitez vos sens à découvrir <b>les bienfaits d’un massage bien-être personnalisé</b> concocté par notre équipe d’esthéticiennes.</p>
                                <p align="justify"><b>Seul ou en duo</b>, quelle que soit la zone que vous souhaitez détendre, il ne vous reste qu’à préciser la pression souhaitée, et la senteur de l’huile de massage qui vous inspire…. Et elles se chargent de vous apporter une parfaite sensation de bienfait.</p>
                            </p>
                            <img src={poufs} alt="poufs" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Moment privilégié Parents-Enfants</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                            <p align="justify"><b>Les enfants sont les bienvenus</b> sous la surveillance de leurs parents, équipements de flottaison à prévoir.</p>
                            <p align="justify">Profitez d’un massage bien-être <b>en duo parent-enfant</b> et terminez l’après-midi avec une pause gourmande boisson-mignardises dans notre espace table d’hôtes.</p>
                            </p>
                            <img src={massage2} alt="massage" width="580" height="350"/>
                        </div>

                    </div>

                </div> */}

                <div className="ContainerBackground" data-aos="fade-right" data-aos-duration="1000">

                <div className="ContainerHome">

                    <h3 align="center">Quels types d'évènements peuvent être organisés ?</h3>
                    <div className="EquipementItem PageItem NoImage">

                        <p align="justify">
                            <p align="justify">Vous pouvez louer la piscine pour n'importe quel type d'évènements (dans le respect du caractère relaxant des lieux.) </p>
                            <p>Que ce soit des <b>anniversaires</b> en famille ou avec des amis, des <b>EVJF</b> (enterrement de vie de jeune fille) ou <b>EVG</b> (enterrement de vie de garçon), avec vos collègues pour renforcer les liens lors d'un <b>team building</b> ou tout simplement pour venir vous détendre quelques heures <b>en couple</b> lors d'un rendez-vous romantique. </p>
                            <p>Pour vos évènements, nous pouvons prévoir <b>apéritif dinatoire</b>, ou <b>repas en table d'hôtes.</b> <i>(NB : il n'est pas autorisé d'amener boissons ou nourriture dans l'espace bien-être.) </i></p>
                            <p><u>A noter</u> : certains créneaux sont aussi proposés en accès piscine seul. </p>
                            <p align="center"><b>N'hésitez pas à nous  contacter pour plus de renseignements !</b></p>
                        </p>
                    </div>

                </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                <div className="ContainerHome">

                    <h3 align="center">Quels sont les équipements disponibles avec la pisicine ?</h3>
                    <div className="EquipementItem PageItem NoImage">

                        <p align="justify">
                            <p align="justify">Vous pouvez être maximum <b>10 personnes</b> par créneau réservé. Outre la <b>pisicine</b>, qui dispose de 5 jets massants et d'une nage à contre courant, vous avez accès à un <b>sauna</b> et un <b>jaccuzzi</b>. </p>
                            <p> Une douche est à votre disposition ainsi que des vestiaires. Nous pouvons fournir les <b>serviettes</b></p>
                            <p>Nous offrons la possibilité de commander des <b>boissons et en-cas</b> dans le respect des règles d'hygiène (gobelets spéciaux, espace dédié...), mais il n'est pas autorisé d'amener boissons ou nourriture personnelles</p>
                            <p align="center"> Pensez à réserver vos <b>massages</b> ! </p>
                        </p>
                    </div>

                </div>

                </div>

                <div className="BoutonBlack" data-aos="fade-right" data-aos-duration="1000">
                    <a href="/">Retour Accueil</a>
                </div>


            </div>

            <div className="PrivateSpaContainer2">


                {/* <div className="privateSpaBox">
                    <h2>Escapade en amoureux</h2>
                    <p>Venez profitez d’une nuit ou d’un weekend de détente en chambre d’hôtes, au cœur de la campagne Pévéloise.</p>
                    <p>Après une nuitée en chambre d’hôtes personnes, un agréable petit déjeuner vous sera servi. Un accès au SPA de 2 h vous attend ensuite. En complément, cocktail ou coupe de champagne, planche apéritive, massage solo ou duo au bord de la piscine peuvent vous être proposés…. Bienvenue dans notre cocon !</p>
                </div> */}

                
                
                {/* <div className="privateSpaBox">
                    <h2>Anniversaires, Soirée entre filles, entre amis</h2>
                    <p>Un évènement à fêter, une envie de se retrouver entre ami(e)s ? La Couture du Charme est le lieu idéal : un accès SPA privatif avec piscine, sauna et jacuzzi, un apéritif avec planche apéritive, une nuitée en chambre d’hôtes (l’une de nos 3 chambres spacieuse et reposante peut accueillir jusqu’à 5 personnes), pourquoi pas un massage bien-être…. Composez votre venue aux grés de vos envies.</p>
                </div> */}
            </div>

            <Adresse/>

        </HelmetProvider>
    );
};