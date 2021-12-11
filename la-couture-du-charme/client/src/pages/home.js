import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'



//On importe le CSS
import '../CSS/Home.scss'
import 'aos/dist/aos.css'

//On importe les composants
import Reserver from '../Components/reserver'
import Adresse from '../Components/adresse'
import AOS from 'aos'

//On importe les images
import Facade from '../Images/house2.jpg'
import SPA from '../Images/spa.jpg'
import Piscine from '../Images/piscine.jpg'
import Sauna from '../Images/sauna.jpg'
import Massage from '../Images/massage3.jpg'
import Chambre from '../Images/room.jpg'
import Centre from '../Images/centre.jpg'



export default function Home() {

    //On initialise AOS (mouvement div)
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])


    const Equipements = [
        {
            titre: "JACUZZI SPA PRIVATIF",
            lien: "/spa-privatif",
            image: SPA,
            aos:"zoom-in-left",
            description: "Evacuez la pression du quotidien dans notre jacuzzi multi-jets <b>hydrothérapie</b> haute performance. <br/> <br/>Jusqu'à <b>6 personnes</b> pourront se prélasser dans une eau à <b>37°C</b>. <br/><br/>Profitez des bienfaits de la lumière grâce aux spots de <b>chromothérapie</b>."
        },
        {
            titre: "PISCINE PRIVATIVE",
            lien: "/piscine-privee",
            image: Piscine,
            aos:"fade-right",
            description: "Prélassez-vous dans le grand bain de la <b>piscine intérieure de 10m sur 4m</b> chauffée à <b>30°C toute l’année</b>. <br/><br/>Pour votre bien-être, elle comporte une <b>cascade</b> et <b>5 jets de massage</b> pour le dos, fessiers, abdos et mollets.<br/><br/>Vous êtes sportif ? Elle est équipée d’une <b>nage à contre courant</b> réglable en intensité."
        },
        {
            titre: "SAUNA FINLANDAIS PRIVATIF",
            lien: "#",
            image: Sauna,
            aos:"zoom-in-left",
            description: "Entièrement en bois et chauffé par des <b>pierres de lave</b>, notre sauna finlandais dispose d’une large paroi vitrée avec <b>vue sur la pisicine</b>. <br/><br/>Equipé d’un banc à deux niveaux, profitez d’une chaleur intense pour vous détendre et discuter avec votre famille ou vos amis."
        },
        {
            titre: "MASSAGE BIEN-ÊTRE",
            lien: "#",
            image: Massage,
            aos:"fade-right",
            description: "Invitez vos sens à découvrir les bienfaits d’un massage personnalisé concocté par notre <b>équipe d’esthéticiennes</b>. <br/><br/><b>Seul ou en duo</b>, quelle que soit la zone que vous souhaitez détendre, il ne vous reste qu’à préciser la pression souhaitée, et la senteur de l’huile de massage qui vous inspire : <b>sensation de bienfait assurée !</b>"
        },
        {
            titre: "CHAMBRE D’HÔTES",
            lien: "/chambres-hotes",
            image: Chambre,
            aos:"zoom-in-left",
            description: "Envie de prolonger la détente ? Dans un style moderne et élégant, les <b>chambres d'hôtes</b> de la Couture du Charme vous proposent des prestations et un environnement de qualité. <br/><br/>En famille ou entre amis, venez gouter au calme et au dépaysement de l'une de nos <b>3 chambres spacieuses</b>, au coeur de la campagne du Pévèle."
        },
    ]


    return (

        <HelmetProvider>

            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SPA Privatif et Piscine entre St Amand les Eaux et Orchies (59)</title>
                <meta name="description" content="Faites une parenthèse dans votre quotidien en venant vous détendre dans la campagne de Saméon, entre Orchies et de Saint-Amand-les-Eaux dans le Nord (59). Profitez d’un SPA Privatif équipé d’une piscine, d’un jacuzzi et d’un sauna." />
                <html lang="fr" />

                <meta property="og:title" content="SPA Privatif et Piscine entre St Amand les Eaux et Orchies (59)" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Faites une parenthèse dans votre quotidien en venant vous détendre dans la campagne de Saméon, entre Orchies et de Saint-Amand-les-Eaux dans le Nord (59). Profitez d’un SPA Privatif équipé d’une piscine, d’un jacuzzi et d’un sauna." />

            </Helmet>


            <div className="MainHome">

                {/* <div className="BackgroundHome">
                </div> */}

                <div className="ImageHome">
                    <img src={Centre} alt="couture du charme" />
                </div>

                <div className="ContainerBackground">

                    <div className="ContainerHome">

                        <h1 align="left">Une parenthèse</h1>
                        <h2 align="right">Dans votre quotidien</h2>

                        <div className="Presentation">

                            <div className="PresentationItem">
                                <img src={Facade} alt="couture du charme" width="580" />
                            </div>

                            <div className="PresentationItem">
                                <div className="Separateur"></div>
                                <p align="justify">Au cœur d'une nature calme et verdoyante, la <b>Couture du Charme</b> vous accueille dans son <b>spa privatif</b> et ses <b>chambres d’hôtes.</b> A Saméon, à proximité d'Orchies et Saint Amand Les Eaux, 20 minutes seulement vous séparent de Lille et Valenciennes.</p>
                                <div className="Separateur"></div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="Equipements">
                    {
                        Equipements.map((item, i) => {
                            if (item.lien !== '#'){
                                return (
                                    <div className="ContainerBackground" key={i}>
    
                                        <div className="ContainerHome" data-aos={item.aos}>
    
                                        <a href={item.lien}><h3 align="center">{item.titre}</h3></a>
                                            <div className="EquipementItem">
    
                                                <p align="justify" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                <a href={item.lien}><img src={item.image} alt={item.titre} width="580" /></a>
                                            </div>
    
                                        </div>
    
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="ContainerBackground" key={i}>
    
                                        <div className="ContainerHome" data-aos={item.aos}>
    
                                        <h3 align="center">{item.titre}</h3>
                                            <div className="EquipementItem">
    
                                                <p align="justify" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                <img src={item.image} alt={item.titre} width="580" />
                                            </div>
    
                                        </div>
    
                                    </div>
                                )
                            }
                            
                        })
                    }

                </div>



            </div>

            <Reserver />

            <div className="BoutonBlack">
                    <a href="/Tarifs">Nos Tarifs</a>
            </div>

            <Adresse />

        </HelmetProvider>
    )
}
