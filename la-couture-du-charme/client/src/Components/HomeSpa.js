import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomeSpa.css';
import imgSpa from '../Images/piscine.jpg'

function HomeSpa({spa}) {
  return (
    <div className="container-Spa" ref={spa}>
      <img src={imgSpa} alt="Canvas Logo" className="imageSpa"/>
      <div className="containerTextBorderSpa">
      {/* <Link to="/PrivateSpa" className='spa-link'> */}
        <div className="containerTextSpa">
          <h2 >Spa privatif</h2>
          <p>Entre amis ou en famille, venez vivre un moment inoubliable dans une bulle d'exception de 100 m².</p>
          <p>Notre univers balnéo entièrement dédié au bien-être comprend un sauna, un jacuzzi et une picine privative chauffée.</p>
          <p>Des modelages pourront vous être proposés afin de vous garantir une relaxation optimale.</p>
        </div>
      {/* </Link> */}
      </div>
    </div>
  );
}

export default HomeSpa;