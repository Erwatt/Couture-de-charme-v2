import React from 'react';
import '../CSS/Home.css';
import Promise from './Promise';
import HomePiscine from './HomePiscine';
import HomeRooms from './HomeRooms';
import HomeSpa from './HomeSpa';


function Home(){
    return (
        <div className="home">
            <Promise/>
            <div className="home-intro">
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
            <div className="home-infos">
                <HomeRooms/>
                <HomePiscine/>
                <HomeSpa/>
            </div>
        </div>
    );
};

export default Home;