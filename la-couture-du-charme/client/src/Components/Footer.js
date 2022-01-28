import React from 'react'

//Bandeau de Cookies
import CookieConsent from "react-cookie-consent";

//On importe le css
import '../css/footer.scss'

//On importe le SVG
import PlayWhite from '../images/playwhite.svg'

export default function Footer() {

    return (
        <div className="MainFooter">

            <CookieConsent
                location="bottom"
                buttonText="J'accepte"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#000000", lineHeight:"150%" }}
                buttonStyle={{ color: "#000000", padding: "12px 16px", background: "#B8B58C", fontSize: "16px", width:"150px" }}
                expires={150}
            >
                Ce site internet utilise des cookies dans le but d'améliorer la pertinence du contenu. En continuant la navigation, vous acceptez leurs utilisations.{" "}
            </CookieConsent>


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
