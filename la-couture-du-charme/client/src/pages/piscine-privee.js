import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//On importe les composants
import Adresse from '../Components/adresse'
import AOS from 'aos'
import Reserver from '../Components/reserver'

//On importe les images
import piscine from '../Images/piscine.jpg';

//On importe le CSS
import '../CSS/Home.scss'
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
                <title>Louer une piscine privée entre St Amand les Eaux et Orchies (59)</title>
                <meta name="description" content="Epatez vos amis et/ou votre famille en privatisant une piscine avec SPA à la campagne. Vous pouvez louer une piscine privée tout en ayant accès à un jacuzzi et sauna privatifs." />
                <html lang="fr" />
            </Helmet>

            <div className="MainHome">

                <div className="TitrePage">
                    <h1 align="center">Louer une piscine privée</h1>
                    <h2 align="center">8 personnes maximum</h2>
                    <p align="center">Epatez vos amis et/ou votre famille en privatisant une <b>piscine avec SPA à la campagne</b>. Vous pouvez louer une piscine privée tout en ayant accès à un <b>jacuzzi et sauna</b> privatifs.</p>
                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Pourquoi louer une piscine ?</h3>
                        <div className="EquipementItem PageItem">

                            <p align="justify">
                                <p align="justify">Vous profitez d'un accès exclusif à une <b>pisicine chauffée à 30°C et couverte</b> avec votre famille et vos amis. Inutile d'investir dans une piscine ou de s'occuper de son entretien, vous accédez à un espace propre équipé de vestiaires, d'une douche, d'un sauna et d'un jacuzzi.</p>
                                <p align="justify">Les serviettes sont fournies.</p>
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
                                <p align="justify">Vous pouvez louer la pisicine pour n'importe quel type d'évènements. Que ce soit des <b>anniversaires</b> en famille ou avec des amis, des <b>EVJF</b> (enterrement de vie de jeune fille) ou <b>EVG</b> (enterrement de vie de garçon), avec vos collègues pour renforcer les liens lors d'un <b>team building</b> ou tout simplement pour venir vous détendre quelques heures <b>en couple</b> lors d'un rendez-vous romantique.</p>
                            </p>
                        </div>

                    </div>

                </div>

                <div className="ContainerBackground" data-aos="fade-left" data-aos-duration="1000">

                    <div className="ContainerHome">

                        <h3 align="center">Quels sont les équipements disponible avec la pisicine ?</h3>
                        <div className="EquipementItem PageItem NoImage">

                            <p align="justify">
                                <p align="justify">Vous pouvez être maximum <b>8 personnes</b> par créneau réservé. Outre la <b>pisicine</b>, qui dispose de 5 jets massant et d'un kit de nage à contre courant, vous avez accès à un <b>sauna</b> et un <b>jaccuzzi</b>. Pensez à réserver des <b>massages</b>. Une douche est à votre disposition ainsi que des vestiaires. Nous fournissons les <b>serviettes</b> et il est possible de commander des <b>boissons</b>.</p>
                            </p>
                        </div>

                    </div>

                </div>

                <Reserver/>

            </div>

            <Adresse />

        </HelmetProvider>
    )
}