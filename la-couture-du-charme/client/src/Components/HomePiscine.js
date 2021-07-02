import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/HomePiscine.css';

function HomePiscine() {
  return (
    <div className="container-piscine">
      <div className="imagepiscine"></div>
       <div className="borderPiscine">
        <Link to="/privatePool" className="pool-link">
          <div className="text-containerpiscine">
             <h2 className = "titlepiscine">
                 Piscine privative
             </h2>
             <p className = "textpiscine">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec. Euismod nisi porta lorem mollis aliquam ut porttitor leo. 
             </p>
          </div>
         </Link>
         </div>

          
      </div>
  );
}

export default HomePiscine;