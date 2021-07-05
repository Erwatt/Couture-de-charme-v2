import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomeSpa.css';

function HomeSpa() {
  return (
    <div className="container-Spa">
      <div className="borderSpa">
        <Link to="/PrivateSpa" className='Spa-link'><div className="text-containerSpa">
             <h2 className = "titleSpa">
                 Spa privatif
             </h2>
             <p className = "textSpa">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec. Euismod nisi porta lorem mollis aliquam ut porttitor leo. 
             </p>
         </div>
         </Link>
         </div>
         <div className="imageSpa"></div>

          
      </div>
  );
}

export default HomeSpa;