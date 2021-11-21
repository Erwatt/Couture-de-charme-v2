import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import '../CSS/MentionsLegales.scss'



function MentionsLegales() {

    window.scrollTo(0, 0);

    return (
        <HelmetProvider>

            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mentions légales - La Couture du Charme à Saméon</title>
                <meta name="description" content="Retrouvez toutes les informations légales pour nous contacter." />
                <html lang="fr" />

            </Helmet>
            <div className="mentions-title">
                <b>Mentions Légales</b>
            </div>
            <div className="mentions-legales">
                <div>
                    <p>Le présent site est édité par Erwan Wattelier, Nicolas Defoort, Mathias Mege, en étroite collaboration avec Minucci Tech</p>
                    <p>Pour le compte de SARL SAMEO (La Couture du Charme), société au capital de 60 000 €, RCS DOUAI 5189055340021</p> 
                    <p>Gérante et Responsable de publication : Valérie Lictevout</p>
                    <p>Hébergeur : 1 & 1 Ionos SARL, 7 Place de la gare, 57200 Sarreguemines, SIRET 43130377500016</p><br></br>
                </div>
               
                <br />
                <h2>OBJET DU SITE INTERNET</h2>
                <p>Le présent site internet a pour objet la présentation des activités de la Couture du Charme, SPA et chambres d'hôtes et de permettrent aux utilisateurs d'acheter des prestations.</p>
                <br />
                <h2>DROITS D'AUTEURS</h2>
                <p> L'ensemble des éléments présents sur ce site sont protégés par le droit d'auteur et ne peuvent être reproduits sans l'accord préalable de la Couture du Charme :la présentation visuelle, le logo, le contenu écrit, le contenu audiovisuel, les photographies, les fonctionnalités du site internet... </p>
                <br />
                <h2>DONNEES A CARACTERE PERSONNEL</h2>
                <p>Le présent site internet utilise des cookies dans le but de connaître les chiffres de fréquentation de ses différentes pages. L'objectif est de vous proposer du contenu de meilleure qualité, qui réponde parfaitement à vos attentes. Vos données personnelles sont collectées lors d'une prise de contact avec notamment le formulaire de contact ou lorsque vous prenez rendez-vous. Vous sont demandées uniquement les informations nécessaires pour pouvoir vous recontacter ou répondre à votre problématique. Nous n'utiliserons pas ces informations dans un but de prospection, ni ne communiquerons ces données à un tiers.</p>
                <br />
                <h2>RGPD</h2>
                <p>Conformément au RGPD (règlement général sur la protection des données), vous disposez d’un droit d’information, d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition sur vos données personnelles. Pour exercer ce droit, contactez-nous.</p>
            </div>

            </HelmetProvider>

                );
};

                export default MentionsLegales;
