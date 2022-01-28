import React from 'react'
import { useHistory } from 'react-router'

//On importe les photos
import Coffret from '../images/coffret.jpg'
import OffrirSpa from '../images/offrir-spa.jpg'
import OffrirMassage from '../images/offrir-massage.jpg'


//On importe le css
import '../css/gift.scss'

//On importe les composants
import Adresse from './adresse'


export default function Gift() {
    window.scrollTo(0, 0);

    let history = useHistory();

    function handleModelling() {
        history.push("/Modelling");
    }

    function handleGiftSpa() {
        history.push("/Spa");
    }


    const Formule = [
        {
            titre: "OFFRIR UN CRENEAU ESPACE DETENTE",
            lien: () => { handleGiftSpa() },
            image: OffrirSpa
        },
        {
            titre: "OFFRIR UN MASSAGE ou UN SOIN BIEN ETRE",
            lien: () => { handleModelling() },
            image: OffrirMassage
        }
    ]


    return (

        <div className="MainHome">

            <div className="ContainerBackground BackPink">

                <div className="ContainerHome">

                    <h3 align="center">COFFRET CADEAU</h3>

                    <div className="EquipementItem PageItem PageGift">

                        <p align="justify">
                            <p align="justify"><b>Offrez à vos proches</b> un délicieux moment de détente pour oublier le stress quotidien.</p>
                            <p align="justify">Nous vous proposons un coffret comprenant votre <b>invitation personnalisée</b>, envoyée à domicile par nos soins.</p>
                            <p align="justify">Pour un <b>cadeau de dernière minute</b>, un envoi par mail durant les horaires d'ouverture du spa est possible.</p>
                        </p>
                        <img src={Coffret} alt="coffret cadeau" width="580" height="350" />
                    </div>

                </div>


                <div className="MainBook">
                    <div className="ContainerBackground BackGreyGift">

                        <div className="SubContainerBackground">

                            <h1 align="center">CHOISISSEZ UNE FORMULE</h1>


                            <div className="SubContainerItem">

                                {
                                    Formule.map((item, i) => {

                                        return (

                                            <div className="ItemChoixBook" key={i} onClick={item.lien}>

                                                <img src={item.image} alt={item.titre} width="350" />

                                                <h2 align="center">{item.titre}</h2>

                                            </div>

                                        )
                                    })
                                }

                            </div>

                        </div>



                    </div>



                </div>

            </div>
            <Adresse/>
        </div>
    )
}