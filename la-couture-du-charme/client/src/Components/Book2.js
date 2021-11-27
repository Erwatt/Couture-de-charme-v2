import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { useHistory } from 'react-router-dom';



//On importe le CSS
import '../CSS/Book2.scss'
import '../CSS/Book.scss'

//On importe les composants
import Adresse from './adresse'

//On importe les images
import JET from '../Images/jet.jpg'
import ROOM from '../Images/rsv-room.jpg'
import BOX from '../Images/box.jpg'


export default function Book() {

    window.scrollTo(0, 0);


    const history = useHistory();


    function handleBookSpa() {
        history.push('/BookSpa');
    };
    function handleBookRoom() {
        history.push('/chambres-hotes');
    };

    function handleGift() {
        history.push('/Gift');
    }

    const BookRoom = () => {

        handleBookRoom()
    }
    const BookSpa = () => {

        handleBookSpa()
    }


    const Choix = [
        {
            titre: "RÉSERVER UN CRENEAU ESPACE DETENTE",
            lien: () => { BookSpa() },
            image: JET
        },
        {
            titre: "DISPONIBILITES DES CHAMBRES",
            lien: () => { BookRoom() },
            image: ROOM
        },
        {
            titre: "OFFRIR UNE CARTE CADEAU",
            lien: () => { handleGift() },
            image: BOX
        }
    ]



    return (
        <HelmetProvider>

            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Réserver ou offir un SPA ou chambre d'hôtes</title>
                <meta name="description" content="Réservez ou achetez un bon cadeau en ligne pour accéder au SPA ou/et chambres d'hôtes de la Couture du Charme à Saméon." />
                <html lang="fr" />

            </Helmet>

            <div className="MainBook">

                <div className="ContainerBackground">

                    <div className="SubContainerBackground">

                        <h1 align="center">AU CHOIX</h1>


                        <div className="SubContainerItem">

                            {
                                Choix.map((item, i) => {

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


                            <Adresse/>

            </div>

        </HelmetProvider>




    )
}
