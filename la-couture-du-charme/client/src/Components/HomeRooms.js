import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomeRooms.css';
import imgRoom from '../Images/chambre.jpeg'


function HomeRooms({room}) {

  

  return (
    <div className="container-room" ref={room}>
        <img src={imgRoom} alt="Canvas Logo" className="imageRoom"/>
        <div className="containerTextBorderRoom">
          <div className="containerTextRomm">
            <h3>Chambres</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Purus non enim praesent elementum facilisis leo vel. Duis convallis convallis tellus id interdum velit laoreet id. Neque sodales ut etiam sit amet nisl purus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.</p>
          </div>
        </div>
      
    </div>
    
  );
}

export default HomeRooms;
