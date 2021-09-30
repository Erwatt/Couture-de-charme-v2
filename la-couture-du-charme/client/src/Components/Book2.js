import '../CSS/Book2.scss';
import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

import {useHistory} from 'react-router-dom';




export default function Book(){
    window.scrollTo(0, 0);

const[bookRoom,setBookRoom]=useState(false)
const[bookSpa,setBookSpa]=useState(false)

const history = useHistory();


function handleBookSpa(){
    history.push('/BookSpa');
};
function handleBookRoom(){
    history.push('/chambres-hotes');
};

function handleGift(){
    history.push('/Gift');
}

const BookRoom = () => {
    
    handleBookRoom()
}
const BookSpa = () => {
    
    handleBookSpa()
}





    return(
        <HelmetProvider>

        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Réserver ou offir un SPA ou chambre d'hôtes</title>
            <meta name="description" content="Réservez ou achetez un bon cadeau en ligne pour accéder au SPA ou/et chambres d'hôtes de la Couture du Charme à Saméon." />
            <html lang="fr" />

        </Helmet>
            
                        <div>
                            <div className="containerHomeBook">
                                <div className="containerSide">
                                    <div className="bookLeftContainer">
                                        <div className="containerWhite">
                                            <div className="containerFlexRowEnd">
                                                <p className="textTitleBook">Réservez votre prestation</p>
                                            </div>
                                            <div className="containerButtonBook">
                                                <p className="buttonBook" id="bookSpa" onClick={()=>BookSpa()}>Centre de détente</p>
                                                <p className="buttonBook" id="bookRoom" onClick={()=>BookRoom()}>Chambre</p>       
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="containerSide">
                                    <div className="giftRightContainer">
                                        <p className="textCadeauUnique">Offrez un cadeau unique</p>
                                        <div className="containerFlexRowEnd"><p className="btnCadeau" onClick={()=>handleGift()}>Bon cadeau</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </HelmetProvider>
    

    

    )
}
