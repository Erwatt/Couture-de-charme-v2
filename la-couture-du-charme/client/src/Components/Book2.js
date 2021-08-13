import '../CSS/Book2.scss';
import React, { useState } from 'react';

import {useHistory} from 'react-router-dom';




export default function Book(){

const[bookRoom,setBookRoom]=useState(false)
const[bookSpa,setBookSpa]=useState(false)

const history = useHistory();


function handleBookSpa(){
    history.push('/BookSpa');
};
function handleBookRoom(){
    history.push('/BookRoom');
};


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
                                                <p className="textTitleBook">Réservez votre séjour</p>
                                            </div>
                                            <div className="containerButtonBook">
                                                <p className="buttonBook" id="bookRoom" onClick={()=>BookRoom()}>Réserver une chambre</p>
                                                <p className="buttonBook" id="bookSpa" onClick={()=>BookSpa()}>Réserver le centre de détente</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="containerSide">
                                    <div className="giftRightContainer">
                                        <p className="textCadeauUnique">Offrez un cadeau unique</p>
                                        <div className="containerTextCadeau">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. In cursus turpis massa tincidunt dui ut ornare lectus. </div>
                                        <div className="containerFlexRowEnd"><p className="btnCadeau">Offrir</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

        </div>
    

    

    )
}
