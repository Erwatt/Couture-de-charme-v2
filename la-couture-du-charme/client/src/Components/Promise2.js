import React from 'react';
import '../CSS/Promise2.css'

export default function Promise2(){

    return(
        <div className="containerPromise2">
            <div className="containerFond">
                <div className='citation'>
                    <p>UNE PARENTHÈSE DANS VOTRE QUOTIDIEN</p>
                    {/* <p>DANS VOTRE QUOTIDIEN</p> */}
                </div>
                <div className="groupelement">
                    <div className="element" id="chambres">Chambres</div>
                    <div className="element" id="piscine">Piscine</div>
                    <div className="element" id="spa">Spa</div>
                    <div className="element" id="modelages">Modelages</div>
                </div>
            </div>
            <div className="promise-quiSommesNous">
                    <p>Au coeur d'une nature calme et verdoyante, la Couture du Charme est le lieu
                                                    unique pour vous offrir un moment de détente inoubliable, entre amis ou en famille.
                    </p>
                    <p>Relaxez-vous dans notre spa privatif avec piscine, séjournez dans nos chambre d'hôtes
                                                    spacieuses et modernes, détendez-vous grâce aux bienfaits de nos modelages...
                    </p>
                    <p>La Couture du Charme vous accueille à Saméon, à proximité d'Orchies et Saint Amand, 
                                                    à 20 minutes de Lille et Valenciennes.
                    </p>
            </div>            
        </div>
    )

}