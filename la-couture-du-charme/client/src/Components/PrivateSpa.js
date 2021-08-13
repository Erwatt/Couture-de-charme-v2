import React from 'react';
import Diaporama from './Diaporama';
import fontaine from '../Images/fontaine.jpg';
import spa from '../Images/spa.jpg';
import poufs from '../Images/poufs.jpg';
import sauna from '../Images/sauna.jpg';
import piscine from '../Images/piscine.jpg'
import '../CSS/PrivateSpa.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function PrivateSpa(){
    window.scrollTo(0, 0);

    return (
        <div className="PrivateSpaContainer">
                <div className="SpaHeader">Spa privatif<b></b></div>
                <div className="poolbox" data-aos="fade-left" >
                    <img src={piscine} alt="piscine" className="piscinepic"/>
                    <div className="pool-txt">
                        <h2>Piscine chauffée avec hydrothérapie</h2>
                        <p>Le bassin de 10 x 4 m, chauffé à 30°C tout au long de l’année vous procure détente et relaxation grâce à :</p>
                        <li>Des jets d’hydromassage latéraux : 5 jets de massage spécifiques pour le bas du dos, les muscles fessiers, la sangle abdominale et les mollets  </li>
                        <li>Une cascade : effet visuel captivant et relaxant, tout en permettant un bon massage des épaules et de la nuque</li>
                        <li>Nage à contre-courant : pour une pause sportive</li>
                    </div>
                </div>
                <div className="spabox"  data-aos="fade-right" data-aos-duration="1000">
                    <div className="spa-txt">
                        <h2>Spa 6 places</h2>
                        <p>Excellent remède au stress, notre spa au design et au confort soigné vous permet de relâcher la pression et vous prélasser dans une eau à 37°C.</p>
                        <p>Chacune de ses 6 places dynamiques offre une qualité de massage permettant d’atteindre un haut niveau de performance grâce à des spécificités méticuleusement étudiées : multi jets hydrothérapie, spots de chromothérapie ….</p>
                    </div>
                    <img src={spa} alt="spa" className="spapic"/>
                </div>
                <div className="saunabox" data-aos="fade-left" data-aos-duration="1000">
                    <img src={sauna} alt="piscine" className="saunapic"/>
                    <div className="sauna-txt">
                        <h2>Sauna Finlandais</h2>
                        <p>Laissez la chaleur du sauna vous envelopper et profitez de son effet bénéfique et purifiant sur votre corps.</p>
                        <p>Les essences de bois employées lors de la construction de cet espace spacieux vous envouteront par leurs délicates effluves.</p>
                    </div>
                </div>
                <div className="poufsbox" data-aos="fade-right" data-aos-duration="1000">
                    <div className="poufs-txt">
                        <h2>Modelages</h2>
                        <p>Invitez vos sens à découvrir les bienfaits d’un modelage personnalisé concocté par notre équipe d’esthéticiennes.</p> 
                        <p>Seul ou en duo, quelle que soit la zone que vous souhaitez détendre, il ne vous reste qu’à préciser la pression souhaitée, et la senteur de l’huile de massage qui vous inspire…. Et elles se chargent de vous apporter une parfaite sensation de bienfait. </p>
                    </div>
                    <img src={poufs} alt="piscine" className="poufspic"/>
                </div>
        </div>
    );
};