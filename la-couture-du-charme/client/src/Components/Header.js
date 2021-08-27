import React from 'react';
import logo from '../Images/logo.png';
import '../CSS/Header.scss';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useTransition, animated , config} from 'react-spring';
import { useLocation } from 'react-router-dom';


function Header(){

    const [anim1, setAnim1] = useState(false);

    const transition1 = useTransition(anim1, {
        
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: config.molasses,
    });
    
    
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
    useEffect(() => {
        setAnim1(false);

        setInterval(() => {
            setAnim1(true);
        }, 1000);

        

    }, []);
    


    return (
        <div className={headerClasses.join(" ")}>
            <div className="header-tel-back">
                {transition1((style, item) => 
                        item ? <animated.p style={style} className="header-tel"> 07 52 09 07 50</animated.p>: <div ></div> )}
                
            </div>
                <img loading="auto" src={logo} alt="La Couture du Charme" className="header-logo" onClick={handleHome}/>
            <div className="header-book-back">
                {transition1((style, item) => 
                        item ? <animated.p style={style} className="header-book" onClick={handleBook}><span>Réserver/Offrir</span></animated.p>: <div ></div> )}
            </div>
        </div>
    );
};

export default Header;