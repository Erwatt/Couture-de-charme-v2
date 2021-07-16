import React from 'react';
import '../CSS/Promise3.css'
import { useTransition, animated } from 'react-spring';
import { useState, useEffect } from 'react';
import BezierEasing from 'bezier-easing'

export default function Promise3(){

    const easing = BezierEasing(0.25, 0.1, 0.0, 1.0);

    const [anim, setAnim] = useState(false);
    const [animWho, setAnimWho] = useState(false);

    const transition = useTransition(anim, {
        from: {x:0, y: 500, opacity: 0},
        enter: {x:0, y: -50, opacity: 1},
        leave: {x:0, y: 500, opacity: 0},
        config: {duration: 2000, easing: t => easing(t)}
    });

    const transitionWho = useTransition(animWho, {
        from: {x: -500, y: 20, opacity: 0},
        enter: {x:0, y: 20, opacity: 1},
        leave: {x: -500, y: 20, opacity: 0},
        config: {duration: 3000, easing: t => easing(t)}
    });

    useEffect(() => {
        setAnim(false);
        setAnimWho(false)

        setInterval(() => {
            setAnim(true);
        }, 1000);

        setInterval(() => {
            setAnimWho(true);
        }, 1500);

    }, []);

    return(
        <div className="containerPromise3">
            {transition((style, item) => 
            item ? <animated.div style={style} className='promise3-citation'>
                        <p className="promise3-title">UNE PARENTHÈSE DANS VOTRE QUOTIDIEN</p>
                    </animated.div>: "")}
             
            {transitionWho((style, item) =>
            item ? <animated.div style={style} className="promise3-cadre">
                <div className="promise3-quiSommesNous">
                        <div className="sentence">Au coeur d'une nature calme et verdoyante, la Couture du Charme est le lieu
                         unique pour vous offrir un moment de détente inoubliable, entre amis ou en famille.
                         
                         
                        </div>
                        <div className="sentence">Relaxez-vous dans notre spa privatif avec piscine, séjournez dans nos chambre d'hôtes
                         spacieuses et modernes, détendez-vous grâce aux bienfaits de nos modelages...</div>
                        <div className="sentence">La Couture du Charme vous accueille à Saméon, à proximité d'Orchies et Saint Amand, 
                         à 20 minutes de Lille et Valenciennes.</div>
                </div> 
            </animated.div> : "")}       
        </div>

        
    )

}