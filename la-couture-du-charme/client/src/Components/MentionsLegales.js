import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import '../CSS/MentionsLegales.scss'



function MentionsLegales() {

    window.scrollTo(0, 0);

    return (
        <HelmetProvider>

            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mentions légales - Couture du Charme à Saméon</title>
                <meta name="description" content="Retrouvez toutes les informations légales pour nous contacter." />
                <html lang="fr" />

            </Helmet>
            <div className="mentions-title">
                <b>Mentions Légales</b>
            </div>
            <div className="mentions-legales">
                <div>
                    <p>Le présent site est édité par Nicolas Defoort, Mathias Mege et Erwan Wattelier</p>
                    <p>Responsable de publication : Valérie Lictevout</p>
                    <p>Hébergeur : 1 & 1 Ionos SARL, 7 Place de la gare, 57200 Sarreguemines</p><br></br>
                </div>
                <h2>OBJET DU SITE INTERNET</h2>
                <p>Le présent site internet a pour objet la présentation des activités de la couture du charme, SPA et chambres d'hôtes.</p>
                <br />
                <h2>DROITS D'AUTEURS</h2>
                <p>Que ce soit la présentation visuelle, le logo, le contenu écrit, le contenu audiovisuelle, les photographies, les fonctionnalités du site internet... L'ensemble de ces éléments sont protégés par le droit d'auteur et ne peuvent être reproduits sans l'accord préalable du cabinet.</p>
                <br />
                <h2>DONNEES A CARACTERE PERSONNELLE</h2>
                <p>Le présent site internet utilise des cookies dans le but de connaître les chiffres de fréquentation de ses différentes pages. L'objectif est de vous proposer du contenu de meilleur qualité, qui réponde parfaitement à vos attentes. Vos données personnelles sont collectées lors d'une prise de contact avec notamment, notamment via le formulaire, lorsque vous prenez rendez-vous ou encore lorsque vous créez votre espace personnel en ligne. Vous est demandé, uniquement les informations nécessaires pour pouvoir vous recontacter ou répondre à votre problématique. Nous n'utiliserons pas ces informations dans un but de prospection, ni ne communiquerons ces données à un tiers.</p>
                <p>Conformément au RGPD (règlement général sur la protection des données), vous disposez d’un droit d’information, d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition sur vos données personnelles. Pour exercer ce droit, contactez-nous.</p>
            </div>

            </HelmetProvider>

                );
};

                export default MentionsLegales;