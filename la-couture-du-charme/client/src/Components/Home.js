import React from 'react';
import '../CSS/Home.css';
// import Promise from './Promise';
// import HomePiscine from './HomePiscine';
import HomeRooms from './HomeRooms';
import HomeSpa from './HomeSpa';
import Avis from './Avis';
import {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
// import Promise2 from './Promise2';
import Promise3 from './Promise3';
// import Video from './Video';
import {useHistory} from 'react-router-dom';
import Tarifs from './Tarifs';
import Spa from '../Images/spa.jpg';
import poufs from '../Images/poufs.jpg';
import sauna from '../Images/sauna.jpg';
import piscine from '../Images/piscine.jpg'
import '../CSS/PrivateSpa.css';
import house1 from '../Images/house1.jpg';
import house2 from '../Images/house2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Home(){


    if (useLocation().pathname === '/'){
        window.addEventListener('scroll',handleScrollAnim);
    }
    const history = useHistory();


    function handleTarifs(){
    history.push('/Tarifs');
};

    const [anim1, setAnim1] = useState(false);
    // const [anim2, setAnim2] = useState(false);
    const [anim3, setAnim3] = useState(false);
    const [anim4, setAnim4] = useState(false);
    
    const transition1 = useTransition(anim1, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -100, y: 0, opacity: 0 },
    });

    // const transition2 = useTransition(anim2, {
    //     from: { x: 100, y: 0, opacity: 0 },
    //     enter: { x: 0, y: 0, opacity: 1 },
    //     leave: { x: 100, y: 0, opacity: 0 },
    // });

    const transition3 = useTransition(anim3, {
        from: { x: 100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 100, y: 0, opacity: 0 },
    });

    const transition4 = useTransition(anim4, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 100, opacity: 0 },
    });

    function handleScrollAnim(){
        const offset = window.scrollY;
        if (offset > 100){
            setAnim1(true);
            if (offset > 750){
                // setAnim2(true);
                // if (offset > 1300){
                    setAnim3(true);
                    if (offset > 1300){
                        setAnim4(true);
                    } else {
                        setAnim4(false);
                    };
                } else {
                    setAnim4(false);
                };
            // } else {
            //     setAnim2(false);
            // };
        } else {
            setAnim1(false);
        }; 
    };

    // const pos = React.createRef();
    const room = React.createRef();
    const spa = React.createRef();

    // function scroll(){
    //     pos.current.scrollIntoView();
    // }

    return (
        
        <div className="home" id="home">
            {/* <Promise size='big' room={room} pool={pool} /> */}
            <Promise3/>
            {/* <div className="home-intro">
               

                <p className="home-introText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.
                        Commodo sed egestas egestas fringilla phasellus faucibus.</p>
                <h2 className="home-introQuestion">Qui sommes-nous ?</h2>
            </div> */}

            <div className="IntroContainer" data-aos="fade-right" data-aos-duration="1000">
                <div className="introTextContainer">
                    <div className="house1box">
                        <img src={house1} alt="house1" className="house1"/>
                        <p>Relaxez-vous dans notre spa privatif avec piscine, séjournez dans nos chambres d'hôtes spacieuses et modernes, détendez-vous grâce aux bienfaits de nos modelages...</p>
                    </div>
                    <div className="house2box">
                        <div className="subhouse2box">
                            <h2>La Couture du Charme</h2>
                            <p>Entre amis ou en famille, venez vivre un moment de détente inoubliable dans notre bulle d'exception de 100 m².</p>
                        </div>
                        <img src={house2} alt="house2" className="house2"/>
                    </div>
                </div>    
            </div>
            {/* <div className="home-avis">
            {transition4((style, item) => 
                    item ? <animated.div style={style}><Avis/></animated.div>:"" )}
            </div> */}
            <div className="PrivateSpaContainer">
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
                        <h2>Jacuzzi</h2>
                        <p>Excellent remède au stress, notre spa au design et au confort soigné vous permet de relâcher la pression et vous prélasser dans une eau à 37°C.</p>
                        <p>Chacune de ses 6 places dynamiques offre une qualité de massage permettant d’atteindre un haut niveau de performance grâce à des spécificités méticuleusement étudiées : multi jets hydrothérapie, spots de chromothérapie ….</p>
                    </div>
                    <img src={Spa} alt="spa" className="spapic"/>
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
            <HomeRooms room={room}/>
            <div className="containerBtnTarif"><p className="btnTarif" onClick={()=>handleTarifs()}>Voir les tarifs</p></div>
        </div>
    );
};

export default Home;