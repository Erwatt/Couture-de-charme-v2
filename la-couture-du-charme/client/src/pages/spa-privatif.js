import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//On importe les composants
import Adresse from '../components/adresse'
import AOS from 'aos'


//On importe les images
import spa from '../images/spa1.jpg';
// import poufs from '../images/poufs.jpg';
// import sauna from '../images/sauna.jpg';
// import piscine from '../images/piscine.jpg';
// import massage2 from '../images/massage2.jpg';

//On importe le CSS
import '../css/home.scss'
import 'aos/dist/aos.css'


export default function SpaPrivatif() {

    // window.scrollTo(0, 0);

    //On initialise AOS (mouvement div)
    useEffect(() => {
        AOS.init({ duration: 1000 });
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
                    <h1 align="center">Centre de détente privatif avec Jacuzzi</h1>
                    <h2 align="center">10 personnes maximum</h2>
                    <p align="center">Entre <b>amis</b>, en <b>famille</b>, en <b>amoureux</b> ou pour vos évènements de <b>team building</b>, le SPA privatif de la Couture du Charme est l'endroit détente idéal pour tous vos évènements !</p>
                    <p align="center"> La Couture du Charme est un lieu reposant, doté d'un <b>SPA privatif de 130m2</b> comprenant un jacuzzi, une piscine, un sauna. Vous pourrez réserver des massages, commander une boisson au <b>bord de la piscine</b> et même prolonger la détente en choisissant de séjourner dans l'une de nos <b>chambres d'hôtes.</b></p>
                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Jacuzzi 6 places</h3>
                        <div className="EquipementItem PageItem">

                            <span align="justify">
                                <p align="justify"><b>Excellent remède au stress</b>, notre spa au design et au confort soignés vous permet de relâcher la pression et vous prélasser dans une eau à 37°C.</p>
                                <p align="justify">Chacune de ses <b>6 places dynamiques</b> offre une qualité de massage permettant d’atteindre un haut niveau de performance grâce à des spécificités méticuleusement étudiées : <b>multi jets hydrothérapie</b>, spots de chromothérapie...</p>
                            </span>
                            <img src={spa} alt="jacuzzi" width="580" height="350" />
                        </div>

                    </div>

                </div>


                <div className="ContainerBackground" data-aos="fade-right" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Quels types d'évènements peuvent être organisés à la Couture du Charme ?</h3>
                        <div className="EquipementItem PageItem NoImage">

                            <span align="justify">
                                <p align="justify">Vous pouvez réserver l'espace <b>spa privatif</b> pour n'importe quel type d'évènements (dans le respect du caractère relaxant des lieux.) </p>
                                <p>Que ce soit des <b>anniversaires</b> en famille ou avec des amis, des <b>EVJF</b> (enterrement de vie de jeune fille) ou <b>EVG</b> (enterrement de vie de garçon), avec vos collègues pour renforcer les liens lors d'un <b>team building</b> ou tout simplement pour venir vous détendre quelques heures <b>en couple</b> lors d'un rendez-vous romantique. </p>
                                <p>Pour vos évènements, nous pouvons prévoir <b>apéritif dinatoire</b>, ou <b>repas en table d'hôtes.</b> <i>(NB : il n'est pas autorisé d'amener boissons ou nourriture dans l'espace bien-être.) </i></p>
                                <p align="center"><b>N'hésitez pas à nous  contacter pour plus de renseignements !</b></p>
                            </span>
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Quels sont les équipements disponibles avec le jacuzzi ?</h3>
                        <div className="EquipementItem PageItem NoImage">

                            <span align="justify">
                                <p align="justify">Vous pouvez être maximum <b>10 personnes</b> par créneau réservé dans l'espace détente. Outre le jacuzzi, vous avez accès à un <b>sauna</b> et une <b>piscine</b> de 10m sur 4 m, qui dispose de 5 jets massants et d'une nage à contre courant. </p>
                                <p> Une douche est à votre disposition ainsi que des vestiaires. Nous pouvons fournir les <b>serviettes</b></p>
                                <p>Nous offrons la possibilité de commander des <b>boissons et en-cas</b> dans le respect des règles d'hygiène (gobelets spéciaux, espace dédié...), mais il n'est pas autorisé d'amener boissons ou nourriture personnelles</p>
                                <p align="center"> Pensez à réserver vos <b>massages</b> ! </p>
                            </span>
                        </div>

                    </div>

                </div>

                <div className="BoutonBlack" data-aos="fade-right" data-aos-duration="1000">
                    <a href="/">Retour Accueil</a>
                </div>


            </div>


            <Adresse />

        </HelmetProvider>
    );
};