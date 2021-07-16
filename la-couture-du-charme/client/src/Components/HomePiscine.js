import React from 'react';
import { Link } from 'react-router-dom';
import imgPiscine from '../Images/piscine.jpg'

import '../CSS/HomePiscine.css';

function HomePiscine({pool}) {
  return (
    <div ref={pool} className="container-piscine">
      
      <div className="containerTextBorderPiscine">
        <Link to="/PrivatePool" className="pool-link">
        <div className="containerTextPiscine">
          <h3>Piscine privative</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Purus non enim praesent elementum facilisis leo vel. Duis convallis convallis tellus id interdum velit laoreet id. Neque sodales ut etiam sit amet nisl purus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.</p>
        </div>
        </Link>
      </div>
      <img src={imgPiscine} alt="Canvas Logo" className="imagePiscine"/>

          
    </div>
  );
}

export default HomePiscine;