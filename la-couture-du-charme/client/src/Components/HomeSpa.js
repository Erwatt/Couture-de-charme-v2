import React from 'react';
// import { Link } from 'react-router-dom';
import '../CSS/HomeSpa.css';
import imgSpa from '../Images/spa.jpeg'

function HomeSpa() {
  return (
    <div className="container-Spa">
      <img src={imgSpa} alt="Canvas Logo" className="imageSpa"/>
      <div className="containerTextBorder">
        <div className="containerText">
          <h3>Spa privatif</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Purus non enim praesent elementum facilisis leo vel. Duis convallis convallis tellus id interdum velit laoreet id. Neque sodales ut etiam sit amet nisl purus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeSpa;