import * as React from "react"


//On importe les composants
import Formulaire from './formulaire'


//On importre le CSS
import '../css/adresse.scss'

//On importe les SVG
import PhoneBlack from '../images/phone-call-black.svg'



export default function Adresse() {


    return (
        <div className="BackGrey" id="contact">

            <div className="AdresseMain">

                <div className="AdresseContainer">

                    <div className="AdresseMainCol">
                        <h4>La COUTURE DU CHARME</h4>

                        <ul>
                            <li>1400 rue de Beaumetz</li>
                            <li>59310 SAMÉON</li>
                        </ul>

                        <p><a href="tel:+33752090750"><img src={PhoneBlack} alt="Téléphone" width="20px" />07 52 09 07 50</a></p>
                        <p><a href="tel:+33327415247"><img src={PhoneBlack} alt="Téléphone" width="20px" />03 27 41 52 47</a></p>
                    </div>

                    <div className="AdresseMainCol">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0216795596843!2d3.345324651615077!3d50.45932097937582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2c2b667369865%3A0xf5e2dba3fa81a07a!2sCouture%20du%20Charme%2C%20Spa%20privatif%20%26%20Chambres%20d&#39;h%C3%B4tes!5e0!3m2!1sfr!2sfr!4v1632303621650!5m2!1sfr!2sfr" title="carte" width="90%" height="340px" style={{ border: 0 }} loading="lazy"></iframe>

                    </div>
                </div>

                <div className="AdresseForm">

                    <Formulaire />

                </div>


            </div>

        </div>
    )
}