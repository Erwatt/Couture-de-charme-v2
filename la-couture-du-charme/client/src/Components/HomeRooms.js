import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomeRooms.css';

function HomeRooms({room}) {

  

  return (
    <div className="container-room" ref={room}>
      <div className="borderRoom">
        <Link to="/PrivateRoom" className='Room-link'>
          <div className="text-containerRoom">
           <h2 className = "titleRoom">
               Chambres
           </h2>
           <p className = "textRoom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec. Euismod nisi porta lorem mollis aliquam ut porttitor leo. </p>
        </div>
        </Link>
      </div>
      <div className="imageRoom"></div>
    </div>
    
  );
}

export default HomeRooms;
