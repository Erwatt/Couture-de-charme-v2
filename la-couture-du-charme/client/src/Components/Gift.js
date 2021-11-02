// import { Link } from 'react-router-dom';
import React from 'react'
import { useHistory } from 'react-router'

//On importe les photos
import Coffret from '../Images/coffret.jpg'
import OffrirSpa from '../Images/offrir-spa.jpg'
import OffrirMassage from '../Images/offrir-massage.jpg'


//On importe le css
import '../CSS/Gift.scss'

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
            titre: "OFFRIR UN SPA",
            lien: () => { handleGiftSpa() },
            image: OffrirSpa
        },
        {
            titre: "OFFRIR UN MASSAGE",
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
                            <p align="justify">Un délicieux moment de détente pour oublier le stress quotidien, <b>c’est la promesse que vous offrez</b>.</p>
                            <p align="justify">Envoyez ou offrez un coffret comprenant votre <b>invitation personnalisée</b>.</p>
                            <p align="justify">Pour un <b>cadeau de dernière minute</b>, une invitation personnalisée electronique vous sera envoyée.</p>
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