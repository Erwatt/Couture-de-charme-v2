import React from 'react';
import logo from '../Images/logo.png';
import '../CSS/Header.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Header(){

    const history = useHistory();

    function handleHome(){
        history.push('/');
    };

    function handleBook(){
        history.push('/Book');
    };

    window.onscroll = function() {handleScroll()};

    const [sticky, setSticky] = useState(false);

    function handleScroll(){
        const offset = window.scrollY;
        if (offset > 100){
            setSticky(true);
        } else {
            setSticky(false);
        };
    };
    

    let headerClasses = ['header-box']
    if (sticky){
        headerClasses.push("header-sticky");
    }

    return (
        <div className={headerClasses.join(" ")}>
            <div className="header-tel-back">
                <p className="header-tel">06 31 84 42 39</p>
            </div>
                <img src={logo} alt="La Couture du Charme" className="header-logo" onClick={handleHome}/>
            <div className="header-book-back">
                <p className="header-book" onClick={handleBook}><span>Réserver</span></p>
            </div>
        </div>
    );
};

export default Header;