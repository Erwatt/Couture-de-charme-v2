import React from 'react';
import logo from '../Images/logo.png';
import '../CSS/Header.css';

function Header(){
    return (
        <div className="header-box">
            <div className="header-tel-back">
                <p className="header-tel">06.31.84.42.39</p>
            </div>
            <img src={logo} alt="La Couture du Charme" className="header-logo"/>
            <div className="header-book-back">
                <p className="header-book"><span>Réserver</span></p>
            </div>
        </div>
    );
};

export default Header;