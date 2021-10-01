import React from 'react'
import GA4React from "ga-4-react"

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'



//On importe les images
import logo from '../Images/logo.png'
import telephone from '../Images/phone-call.svg'

//On importe le css
import '../CSS/Header.scss'


export default function Header() {

    //Google Analytics 4
    const ga4react = new GA4React("G-XXXXXXXXXX");
    ga4react.initialize()

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

                    <div className="link bouton"><img src={telephone} alt="icone telephone" width="20" height="20" />07 52 09 07 50</div>

                    <div className="link logo"> <img loading="auto" width="200" src={logo} alt="La Couture du Charme" className="header-logo" onClick={handleHome} /></div>

                    <div className="link bouton" onClick={handleBook}><span>Réserver/Offrir</span></div>

                </div>

            </div >

    );
};
