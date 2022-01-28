import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//On importe les composants
import Adresse from '../components/adresse'
import AOS from 'aos'
import Reserver from '../components/reserver'

//On importe les images
import piscine from '../images/piscine.jpg';

//On importe le CSS
import '../css/home.scss'
import 'aos/dist/aos.css'



export default function ChambresHotes() {

    //On initialise AOS (mouvement div)
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])



    return (
        <HelmetProvider>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Réservez une piscine privée entre St Amand les Eaux et Orchies (59)</title>
                <meta name="description" content="Epatez vos amis et/ou votre famille en privatisant une piscine avec SPA à la campagne. Vous pouvez louer une piscine privée tout en ayant accès à un jacuzzi et sauna privatifs. A noter : pour vos évènements, nous pouvons prévoir apéritif dinatoire, ou repas en table d'hôtes. N'hésitez pas à nous contacter !" />
                <html lang="fr" />
            </Helmet>

            <div className="MainHome">

                <div className="TitrePage">
                    <h1 align="center">Profitez d'une piscine privée</h1>
                    <h2 align="center">10 personnes maximum</h2>
                    <p align="center">Epatez vos amis ou votre famille en privatisant une <b>piscine avec SPA à la campagne</b>. Vous pouvez bénéficier de la piscine privée en ayant accès à un <b>jacuzzi et sauna</b> privatifs. </p>
                    <p align="center"> Pour vos évènements, nous pouvons prévoir  <b>apéritif dinatoire</b>, ou  <b>repas table d'hôtes</b>, <b>nuitée sur place en chambre d'hôtes</b>. N'hésitez pas à nous contacter ! </p>
                    <p align="center"> <i>NB : il n'est pas autorisé d'amener boissons ou nourriture personnelles dans l'espace bien-être </i> </p>
                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Pourquoi privatiser une piscine ?</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Vous profitez d'un accès exclusif à une <b>piscine chauffée à 30°C</b> avec votre famille et vos amis. Vous accédez à un espace équipé de vestiaires, d'une douche, d'un sauna et d'un jacuzzi.</p>
                                <p align="justify"><b>Les enfants sont les bienvenus</b> sous la surveillance de leurs parents, équipements de flottaison à prévoir.</p>
                                {/* <p align="justify">Les serviettes sont fournies.</p> */}
                            </p>
                            <img src={piscine} alt="piscine" width="580" height="350" />
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Quels types d'évènements peuvent être organisés ?</h3>
                        <div className="EquipementItem PageItem NoImage">

                            <p align="justify">
                                <p align="justify">Vous pouvez accéder à la piscine de la Couture du Charme pour n'importe quel type d'évènements (dans le respect du caractère relaxant des lieux.) </p>
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


                <Reserver/>

                
            </div>

            <Adresse />

        </HelmetProvider>
    )
}
