import React from 'react';
import '../CSS/Home.css';
import Promise from './Promise';
import HomePiscine from './HomePiscine';
import HomeRooms from './HomeRooms';
import HomeSpa from './HomeSpa';
import Avis from './Avis';
import {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import Promise2 from './Promise2';
// import Video from './Video';

function Home(){

    if (useLocation().pathname === '/'){
        window.addEventListener('scroll',handleScrollAnim);
    }

    const [anim1, setAnim1] = useState(false);
    const [anim2, setAnim2] = useState(false);
    const [anim3, setAnim3] = useState(false);
    const [anim4, setAnim4] = useState(false);
    
    const transition1 = useTransition(anim1, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -100, y: 0, opacity: 0 },
    });

    const transition2 = useTransition(anim2, {
        from: { x: 100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 100, y: 0, opacity: 0 },
    });

    const transition3 = useTransition(anim3, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -100, y: 0, opacity: 0 },
    });

    const transition4 = useTransition(anim4, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 100, opacity: 0 },
    });

    function handleScrollAnim(){
        const offset = window.scrollY;
        if (offset > 600){
            setAnim1(true);
            if (offset > 900){
                setAnim2(true);
                if (offset > 1400){
                    setAnim3(true);
                    if (offset > 2000){
                        setAnim4(true);
                    } else {
                        setAnim4(false);
                    };
                } else {
                    setAnim3(false);
                };
            } else {
                setAnim2(false);
            };
        } else {
            setAnim1(false);
        }; 
    };

    // const pos = React.createRef();
    const room = React.createRef();
    const pool = React.createRef();

    // function scroll(){
    //     pos.current.scrollIntoView();
    // }

    return (
        
        <div className="home">
            {/* <Promise size='big' room={room} pool={pool} /> */}
            <Promise2/>
            <div className="home-intro">
               

                <p className="home-introText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.
                        Commodo sed egestas egestas fringilla phasellus faucibus.</p>
                <h3 className="home-introQuestion">Qui sommes-nous ?</h3>
            </div>


            <div /*ref={pos}*/ className="home-infos">

                {transition1((style, item) => 
                    item ? <animated.div style={style}><HomeRooms room={room}/></animated.div>: <div ref={room}></div> )}
                
                {transition2((style, item) => 
                    item ? <animated.div style={style}><HomePiscine pool={pool}/></animated.div>:<div ref={pool}></div> )}
                
                {transition3((style, item) => 
                    item ? <animated.div style={style}><HomeSpa/></animated.div>:"" )}
               
            </div>
            <div className="home-avis">
            {transition4((style, item) => 
                    item ? <animated.div style={style}><Avis/></animated.div>:"" )}
            </div>
        </div>
    );
};

export default Home;