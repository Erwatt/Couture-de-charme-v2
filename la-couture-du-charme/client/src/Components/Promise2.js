import React from 'react';
import '../CSS/Promise2.css'

import {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';


export default function Promise2(){

    if (useLocation().pathname === '/'){
        window.addEventListener('mousemove',handleScrollAnim);
    }

    const [anim1, setAnim1] = useState(false);
    const [anim2, setAnim2] = useState(false);
    const [anim3, setAnim3] = useState(false);
    const [anim4, setAnim4] = useState(false);
    const [anim5, setAnim5] = useState(false);



    const transition1 = useTransition(anim1, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 0, opacity: 1 },
        delay: 500,
    });
    const transition2 = useTransition(anim2, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 0, opacity: 1 },
        delay: 1000,
    });
    const transition3 = useTransition(anim3, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 0, opacity: 1 },
        delay: 1500,
    });
    const transition4 = useTransition(anim4, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 0, opacity: 1 },
        delay: 2000,
        
    });

    const transition5 = useTransition(anim5, {
        
        duration: 1000,
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: {  opacity: 1 },
        delay: 2000,

        
        
    });
    
   

    function handleScrollAnim(){
        
            setAnim1(true);
            setAnim2(true);
            setAnim3(true);
            setAnim4(true);
            setAnim5(true);
        
    }



    return(
        <div className="containerPromise2">
            <div className="containerFond">
            {transition5((style, item) => 
                    item ? <animated.div style={style} className='citation'> <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></animated.div>: <div ></div> )}
            <div className="groupelement">
            {transition1((style, item) => 
                    item ? <animated.div style={style} className="element" id="chambres">Chambres</animated.div>: <div ></div> )}
               {transition2((style, item) => 
                    item ? <animated.div style={style} className="element" id="piscine"> Piscine</animated.div>: <div ></div> )}
               {transition3((style, item) => 
                    item ? <animated.div style={style} className="element" id="spa">Spa</animated.div>: <div ></div> )}
               {transition4((style, item) => 
                    item ? <animated.div style={style} className="element" id="modelages">Modelages</animated.div>: <div ></div> )}
               
               
                
                
            </div>
            </div>

            
        </div>
    )

}