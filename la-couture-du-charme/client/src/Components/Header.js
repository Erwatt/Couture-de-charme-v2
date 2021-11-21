import React from 'react'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'



//On importe les images
import logo from '../Images/logoV2.png'
import mail from '../Images/mail.png'

//On importe le css
import '../CSS/Header.scss'


export default function Header() {



    //Hooks cacher le menu automatiquement


    function getSize() {
        if (typeof window !== `undefined`) {
            return (
                window.pageYOffset
            )
        }
    }

    const [pos, setPos] = useState(getSize())
    const [visible, setVisible] = useState(true)


    useEffect(() => {

        const handleScroll = () => {
            const temp = window.pageYOffset

            setVisible(pos >= temp)
            setPos(temp)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })


        return (() => {
            window.removeEventListener("scroll", handleScroll, { passive: true });
        })
    })


    //Fin Hooks


    const history = useHistory();

    function handleHome() {
        history.push('/');
    };

    function handleBook() {
        history.push('/book');
    };



    return (



            <div className={!visible ? "MainHeader navbarHidden" : "MainHeader"}>


                <div className="ContainerHeader">

                    <div className="link bouton"><img src={mail} alt="icone mail" width="20" height="20" />spa@coutureducharme.fr</div>

                    <div className="link logo"> <img loading="auto" width="200" src={logo} alt="La Couture du Charme" className="header-logo" onClick={handleHome} /></div>

                    <div className="link bouton" onClick={handleBook}><span>Réserver/Offrir</span></div>

                </div>

            </div >

    );
};
