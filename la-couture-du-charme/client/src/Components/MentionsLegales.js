import React from 'react';
import '../CSS/MentionsLegales.css'

function MentionsLegales(){

    window.scrollTo(0, 0);

    return (
        <div className="mentions-legales">
            <div>
                <p>Le présent site est édité par Nicolas Defoort, Mathias Mege et Erwan Wattelier</p>
                <p>Responsable de publication : Valérie Lictevout</p>
                <p>Hébergeur : 1 & 1 Ionos SARL, 7 Place de la gare, 57200 Sarreguemines</p>
            </div>
            <div>
                <h2>OBJET DU SITE</h2>
                <p>coucou</p>
            </div>
            <div>
                <h2>DROITS D'AUTEURS</h2>
                <p>coucou 2</p>
            </div>
            <div>
                <h2>DONNEES A CARACTERE PERSONNELLE</h2>
                <p>RGPD</p>
            </div>
        </div>
    );
};

export default MentionsLegales;