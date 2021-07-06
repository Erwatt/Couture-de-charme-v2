import React from 'react';
import '../CSS/Home.css';
import Promise from './Promise';
import HomePiscine from './HomePiscine';
import HomeRooms from './HomeRooms';
import HomeSpa from './HomeSpa';

function Home(){

    // const pos = React.createRef();
    const room = React.createRef();
    const pool = React.createRef();

    // function scroll(){
    //     pos.current.scrollIntoView();
    // }

    return (
        <div className="home">
            <Promise size='big' room={room} pool={pool} />
            <div /*onClick={scroll}*/ className="home-intro">
                <div className="home-intro-info">
                    <p className="home-intro-txt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.
                        Commodo sed egestas egestas fringilla phasellus faucibus.
                    </p>
                    <div className="home-intro-who">
                        <h2 className="home-intro-title">QUI</h2>
                        <h2 className="home-intro-title home-intro-title-underline">SOMMES NOUS ?</h2>
                    </div>
                </div>
            </div>
            <div /*ref={pos}*/ className="home-infos">
                <HomeRooms room={room}/>
                <HomePiscine pool={pool}/>
                <HomeSpa/>
            </div>
        </div>
    );
};

export default Home;