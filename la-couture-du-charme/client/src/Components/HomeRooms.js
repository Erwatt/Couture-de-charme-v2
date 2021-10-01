import React from 'react';
import { useHistory } from 'react-router-dom';
import '../CSS/HomeRooms.css';
import imgRoom from '../Images/room.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function HomeRooms({room}) {

  let history=useHistory();
  function handleRoom(){
    history.push("/PrivateRoom");
  }

  return ( 
    <div className="container-room" ref={room} data-aos="fade-right" data-aos-duration="1000">
        <img src={imgRoom} alt="Canvas Logo" className="imageRoom"/>
        <div className="containerTextBorderRoom">
          
          <div className="containerTextRoom">
            <h2>Chambres</h2>
            <p>Dans un style moderne et élégant, les chambres d'hôtes de la Couture du Charme vous proposent des prestations 
              et un environnement de qualité.
            </p>
            <p>En famille, entre amis, pour un week-end en amoureux ou pour un séjour professionnel, 
              venez gouter au calme et au dépaysement de l'une de nos 3 chambres spacieuses, au coeur de la campagne du Pévèle.
            </p>
            {<p onClick={()=>handleRoom()} className="room-link">Voir les chambres</p> }
          </div>
        </div>
    </div>  
  );
}

export default HomeRooms;
