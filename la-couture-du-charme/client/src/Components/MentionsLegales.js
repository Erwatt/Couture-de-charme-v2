import React from 'react';
import '../CSS/MentionsLegales.css'

function MentionsLegales(){

    window.scrollTo(0, 0);

    return (
        <div>
        <div className="mentions-title">
            <b>Mentions Légales</b>
        </div>
        <div className="mentions-legales">
            <div>
                <p>Le présent site est édité par Nicolas Defoort, Mathias Mege et Erwan Wattelier</p>
                <p>Responsable de publication : Valérie Lictevout</p>
                <p>Hébergeur : 1 & 1 Ionos SARL, 7 Place de la gare, 57200 Sarreguemines</p><br></br>
            </div>
            <div>
                <h2>OBJET DU SITE</h2>
                <p>Ce site a pour objet la présentation et réservation de services d'hébergement 
                   et de détente. blablabla on verra après.</p><br></br>
            </div>
            <div>
                <h2>DROITS D'AUTEURS</h2>
                <p>Le logo, les images ou tout autre contenu présent sur ce site sont protégés par le droit d'auteur et ne peuvent pas êtres reproduits sans un accord préalable.   </p><br></br>
            </div>
            <div>
                <h2>DONNEES A CARACTERE PERSONNELLE</h2>
                <p>RGPD</p>
            </div>
        </div>
        </div>
    );
};

export default MentionsLegales;