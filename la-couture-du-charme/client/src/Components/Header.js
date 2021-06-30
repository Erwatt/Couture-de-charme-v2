import React from 'react';
import logo from '../Images/logo.png';
import '../CSS/Header.css';
import {useState} from 'react';

function Header(){

    window.onscroll = function() {handleScroll()};

    // var header = document.getElementById("my-header")
    // console.log(header)
    // var sticky = header.offsetTop;

    // function fixeHeader(){
    //     console.log(sticky)
    //     if (window.pageYOffset > 100){
    //         console.log(header)
    //         header.classList.add("header-sticky");
    //     } else {
    //         header.classList.remove("header-sticky");
    //     };
    // };

    const [sticky, setSticky] = useState(false);

    function handleScroll(){
        const offset = window.scrollY;
        if (offset > 100){
            setSticky(true);
        } else {
            setSticky(false);
        };
    }
    

    let headerClasses = ['header-box']
    if (sticky){
        headerClasses.push("header-sticky");
    }

    return (
        <div className={headerClasses.join(" ")}>
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