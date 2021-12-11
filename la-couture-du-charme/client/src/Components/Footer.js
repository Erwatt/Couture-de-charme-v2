import React from 'react'

//On importe le css
import '../CSS/Footer.scss'

//On importe le SVG
import PlayWhite from '../Images/playwhite.svg'

export default function Footer() {

    return (
        <div className="MainFooter">

            <div className="ContainerFooter">

                <div className="ItemFooter">
                    Couture du Charme 2021
                </div>

                <div className="ItemFooter">

                    <div className="AnimationBoutonFooter">

                        <a href="/" className="hover hover-1">
                            <img src={PlayWhite} alt="Picto flèche" width="10px" />Accueil
                        </a>
                    </div>

                    <div className="AnimationBoutonFooter">

                        <a href="/mentions-legales" className="hover hover-1">
                            <img src={PlayWhite} alt="Picto flèche" width="10px" />Mentions légales
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}
