import '../CSS/Tarifs.scss';
import React, { useState } from 'react';
import tarif from '../Images/Tarifs.PNG'


export default function Tarifs(){
    window.scrollTo(0, 0);
    return(
        <div className="containerTarif">
            <img className="imagetarf" src={tarif} />
        </div>
    )
}