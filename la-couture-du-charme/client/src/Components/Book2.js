import '../CSS/Book2.scss';
import React, { useState } from 'react';
import { InlineWidget, PopupWidget,CalendlyEventListener,PopupButton} from "react-calendly";
import imgRoom from '../Images/chambre.jpeg'




export default function Book(){



    const [room, setRoom] = useState(false);
    const [spa, setSpa] = useState(false);
    const [les2, setLes2] = useState(false);
    const [nombre, setNombre]=useState(0);
    const [chambre1Over, setChambre1Over] = useState(false);
    const [chambre2Over, setChambre2Over] = useState(false);
    const [chambre3Over, setChambre3Over] = useState(false);
    const [roomSelected,setRoomSelected]= useState(false);
    const [roomSelectedNumber,setRoomSelectedNumber]= useState(0);





    const Click = (val,val1,val2) => {
        if(val===1){
            setRoomSelectedNumber(0)
            setRoomSelected(false)
            setNombre(0)
            setSpa(false)
            setLes2(false)
            if (room===false){setRoom(true)}
            else{setRoom(false)}
        }
        if(val===2){
            setRoomSelectedNumber(0)
            setRoomSelected(false)
            setNombre(0)
            setRoom(false)
            setLes2(false)
            if (spa===false){setSpa(true)}
            else{setSpa(false)}
        }
        if(val===3){
            setRoomSelectedNumber(0)
            setRoomSelected(false)
            setNombre(0)
            setRoom(false)
            setSpa(false)
            if (les2===false){setLes2(true)}
            else{setLes2(false)}
            
        }
        if(val===4){
            setNombre(val1)

        }
        if(val===5){
            setRoomSelected(true)
            setRoomSelectedNumber(val1)
           
        }


    }


    return(
    <div className="containerBook2">
        <div className="containerForm2">

            <div className="containerButtonChoix2">
                <div className="buttonChoix2" onClick={()=>Click(1)}>Je veux une chambre</div>
                <div className="buttonChoix2" onClick={()=>Click(2)}>Je ne viens que pour le centre de détente</div>
                <div className="buttonChoix2" onClick={()=>Click(3)}>Les deux</div>
            </div>

            {

                room===true?
                <div className="containerPoster">
                    <div className="containerBookElement" onMouseOver={()=>setChambre1Over(true)} onMouseLeave={()=>setChambre1Over(false)}>
                        <div className="posterChambre" id="chambre1" >
                            {
                                chambre1Over===true?<div>Description : </div>:
                                <img src={imgRoom} alt="Canvas Logo" className="roomimage"/>

                            }
                            
                        </div>
                    
                        <PopupButton className="bookButton" url="https://calendly.com/nicolasdefoort/couture-du-charme" text="Réserver" />
                    </div>
                    <div className="containerBookElement" onMouseOver={()=>setChambre2Over(true)} onMouseLeave={()=>setChambre2Over(false)}>
                        <div className="posterChambre" id="chambre2" >
                            {
                                chambre2Over===true?<div>Description : </div>: 
                                <img src={imgRoom} alt="Canvas Logo" className="roomimage"/>
                            }
                            
                        </div>
                        <PopupButton className="bookButton" url="https://calendly.com/nicolasdefoort/couture-du-charme" text="Réserver" />
                    </div>
                    <div className="containerBookElement" onMouseOver={()=>setChambre3Over(true)} onMouseLeave={()=>setChambre3Over(false)}>
                        <div className="posterChambre" id="chambre3" >
                            {
                                chambre3Over===true?<div className="roomDescription">Description : </div>:
                                <img src={imgRoom} alt="Canvas Logo" className="roomimage"/>
                            }
                            
                        </div>
                        <PopupButton className="bookButton" url="https://calendly.com/nicolasdefoort/couture-du-charme" text="Réserver" />
                    </div>
                    
                </div>:false
            }
            {/* {
                room===true?
                <div className="containerButtonChoix2">
                    <p>Pour combien de personnes ?</p>
                    <input type="number" id="nombre"  min="1" max="100"/>
                    <div className="buttonNumber" onClick={()=>Click(4,document.getElementById("nombre").value)}><p>Valider</p></div>
                </div>:false


            } */}



            {/* {nombre>0?
                <div className="containerButtonChoix2">
                    <PopupButton className="bookButton" url="https://calendly.com/nicolasdefoort/couture-du-charme" text="Chambre 1" />
                    <PopupButton className="bookButton" url="https://calendly.com/nicolasdefoort/couture-du-charme" text="Chambre 2" />
                    <PopupButton className="bookButton" url="https://calendly.com/nicolasdefoort/couture-du-charme" text="Chambre 3" />
                </div>:false

            } */}


            {
                spa===true?
                <div className="">
                    {/* <p>Pour combien de personnes ?</p>
                    <input type="number" id="nombre"  min="1" max="100"/>
                    <div className="buttonNumber" onClick={()=>Click(4,document.getElementById("nombre").value)}><p>Valider</p></div>
 */}
                    
                    <InlineWidget url="https://calendly.com/nicolasdefoort/couture-du-charme" 
                    pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                }}/>
            

                </div>:false
            }
            {/* {nombre>0?
                <div className="">
                    <InlineWidget url="https://calendly.com/nicolasdefoort/couture-du-charme" 
                    pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                }}/>
                    
                </div>:false

            } */}
            {
                les2?
                
                <div className="">
                    {
                    roomSelected?
                        <div className="containerLes2">
                            <div className="les2Element" id="les2Chambre">
                                <p>Réservation chambre</p>

                                {
                                    roomSelectedNumber===0?<div>ERROR</div>:
                                    <div>
                                        {
                                        roomSelectedNumber===1?
                                            <InlineWidget url="https://calendly.com/nicolasdefoort/couture-du-charme" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: false,
                                            primaryColor: '00a2ff',
                                            textColor: '4d5055'}}/>
                                        :false
                                        }
                                        {
                                        roomSelectedNumber===2?
                                            <InlineWidget url="https://calendly.com/nicolasdefoort/couture-du-charme" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: false,
                                            primaryColor: '00a2ff',
                                            textColor: '4d5055'}}/>
                                        :false
                                        }
                                        {
                                        roomSelectedNumber===3?
                                            <InlineWidget url="https://calendly.com/nicolasdefoort/couture-du-charme" 
                                            pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: false,
                                            primaryColor: '00a2ff',
                                            textColor: '4d5055'}}/>
                                        :false
                                        }
                                    </div>
                                }
                                

                            </div>    
                            <div className="les2Element" id="les2Spa">
                            <p>Réservation Spa</p>
                        
                            <div className="">
                                <InlineWidget url="https://calendly.com/nicolasdefoort/couture-du-charme" 
                                pageSettings={{
                                backgroundColor: 'ffffff',
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: false,
                                primaryColor: '00a2ff',
                                textColor: '4d5055'}}/>

                            </div>
                        </div>
                    </div>
                        :
                        <div className="containerPoster">
                            <div className="containerBookElement" onMouseOver={()=>setChambre1Over(true)} onMouseLeave={()=>setChambre1Over(false)}>
                                <div className="posterChambre" id="chambre1" >
                                    {
                                        chambre1Over===true?<div>Description : </div>:
                                        <img src={imgRoom} alt="Canvas Logo" className="roomimage"/>

                                    }
                                    
                                </div>
                            
                                <div className="selectRoomButton"  onClick={()=>Click(5,1)}>Réserver</div>
                                
                            </div>
                            <div className="containerBookElement" onMouseOver={()=>setChambre2Over(true)} onMouseLeave={()=>setChambre2Over(false)}>
                                <div className="posterChambre" id="chambre2" >
                                    {
                                        chambre2Over===true?<div>Description : </div>: 
                                        <img src={imgRoom} alt="Canvas Logo" className="roomimage"/>
                                    }
                                    
                                </div>
                                <div className="selectRoomButton"  onClick={()=>Click(5,2)}>Réserver</div>
                            </div>
                            <div className="containerBookElement" onMouseOver={()=>setChambre3Over(true)} onMouseLeave={()=>setChambre3Over(false)}>
                                <div className="posterChambre" id="chambre3" >
                                    {
                                        chambre3Over===true?<div className="roomDescription">Description : </div>:
                                        <img src={imgRoom} alt="Canvas Logo" className="roomimage"/>
                                    }
                                    
                                </div>
                                <div className="selectRoomButton" onClick={()=>Click(5,3)} >Réserver</div>
                            </div>
                            
                        </div>
                        }   
                        
                        
                    </div>
                    
                    :false
            }


        </div>


    </div>

    )
}
