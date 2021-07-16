import React from 'react';
import logo from '../Images/logo.png';
import '../CSS/Header.scss';
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

    window.addEventListener("scroll", handleScroll);

    const [sticky, setSticky] = useState(false);

    function handleScroll(){
        const offsetHeader = window.scrollY;
        if (offsetHeader > 0){
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
                <p className="header-tel">07 52 09 07 50</p>
            </div>
                <img loading="auto" src={logo} alt="La Couture du Charme" className="header-logo" onClick={handleHome}/>
            <div className="header-book-back">
                <p className="header-book" onClick={handleBook}><span>Réserver</span></p>
            </div>
        </div>
    );
};

export default Header;