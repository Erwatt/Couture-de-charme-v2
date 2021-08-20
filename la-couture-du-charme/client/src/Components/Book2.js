import '../CSS/Book2.scss';
import React, { useState } from 'react';

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
    history.push('/BookRoom');
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
        <div>
            
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

        </div>
    

    

    )
}
