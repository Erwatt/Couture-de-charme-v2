import { AvisList } from "../data/avis";
import React from "react";
import Rate from "./rate";
import '../css/avis.css';
import {useState, useEffect} from 'react';

function Avis(){

    const size = AvisList.length;
    const [pos, setPos] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            var newPos = pos + 1;
            setPos(newPos % size)
        }, 5000);

        return () => clearInterval(interval);

    }, [pos, setPos, size]);



    return (
        <div>
            <ul className="avis-list">
                {/* {AvisList.map(({id, name, rate, txt}) => (
                    <li key={id} className="avis-list-element">
                        <h3>{name}</h3>
                        <p><Rate rate={rate}/></p>
                        <p>{txt}</p>
                    </li>
                ))} */}
                <li key={AvisList[pos].id} className="avis-list-element">
                    <h3>{AvisList[pos].name}</h3>
                    <Rate rate={AvisList[pos].rate}/>
                    <p>{AvisList[pos].txt}</p>
                </li>
            </ul>
        </div>
    );
};

export default Avis;