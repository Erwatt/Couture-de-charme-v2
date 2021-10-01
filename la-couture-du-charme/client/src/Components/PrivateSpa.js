import React from 'react';
// import Diaporama from './Diaporama';
// import fontaine from '../Images/fontaine.jpg';
// import spa from '../Images/spa.jpg';
// import poufs from '../Images/poufs.jpg';
// import sauna from '../Images/sauna.jpg';
// import piscine from '../Images/piscine.jpg';
import massage2 from '../Images/massage2.jpg';
import '../CSS/PrivateSpa.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function PrivateSpa(){

    window.scrollTo(0, 0);

    return (
        <div className="PrivateSpaContainer2">
                {/* <div className="poolbox" data-aos="fade-left" data-aos-duration="1000">
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
                </div> */}
                <div className="privateSpaBox">
                    <p>Envie d’organiser un moment de pure détente en famille ? Un weekend en amoureux ? Ou une soirée entre filles ? <b>La Couture du Charme</b> vous offre la possibilité de privatiser une bulle de détente, avec piscine, sauna, et jacuzzi.</p>
                    <p>Ajoutez à cela un massage bien-être, un After Spa avec apéritif en table d’hôtes, une nuitée sur place avec petit déjeuner…. A chaque occasion sa formule idéale.</p>
                    <p>Enfants bienvenus. Jusqu’à 8 personnes dans le centre de détente</p>
                </div>
                <div className="privateSpaBox">
                    <h2>Escapade en amoureux</h2>
                    <p>Venez profitez d’une nuit ou d’un weekend de détente en chambre d’hôtes, au cœur de la campagne Pévéloise.</p>
                    <p>Après une nuitée en chambre d’hôtes personnes, un agréable petit déjeuner vous sera servi. Un accès au SPA de 2 h vous attend ensuite. En complément, cocktail ou coupe de champagne, planche apéritive, massage solo ou duo au bord de la piscine peuvent vous être proposés…. Bienvenue dans notre cocon !</p>
                </div>
                <div className="privateSpaBox">
                    <h2>Moment privilégié Parents-Enfants</h2>
                    <div className="subPrivateSpaBox">
                        <p>A la Couture du Charme, les enfants sont les bienvenus ! (Sous la surveillance de leurs parents, équipements de flottaison à prévoir) Profitez d’une piscine chauffée à 30 °C toute l’année, le temps d’un créneau de 1h30 ou 3h en après-midi. Baignez-vous en famille, et appréciez ce moment rien qu’entre vous…
                        Les plus grands pourront apprécier une pause dans notre sauna spécialement conçu avec un grand vitrage avec vue sur la piscine.
                        Détendez-vous dans le jacuzzi, profitez d’un massage bien-être en duo parent-enfant et pourquoi pas, terminez l’après-midi avec une pause gourmande boisson-mignardises dans notre espace table d’hôtes. Choisissez votre formule de bonheur en famille !</p>
                        <img src={massage2} alt="piscine" className="subPrivateSpaBoxPic"/>
                    </div>
                </div>
                <div className="privateSpaBox">
                    <h2>Anniversaires, Soirée entre filles, entre amis</h2>
                    <p>Un évènement à fêter, une envie de se retrouver entre ami(e)s ? La Couture du Charme est le lieu idéal : un accès SPA privatif avec piscine, sauna et jacuzzi, un apéritif avec planche apéritive, une nuitée en chambre d’hôtes (l’une de nos 3 chambres spacieuse et reposante peut accueillir jusqu’à 5 personnes), pourquoi pas un massage bien-être…. Composez votre venue aux grés de vos envies.</p>
                </div>
        </div>
    );
};