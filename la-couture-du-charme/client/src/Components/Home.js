import React from 'react';
import '../CSS/Home.css';
import Promise from './Promise';

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
                    <h2 className="home-intro-title">Qui sommes-nous ?</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;