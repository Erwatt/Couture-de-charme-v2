import '../CSS/Book2.scss';
import React from 'react';
// import cocoon3 from '../Images/cocoon3.JPG';
// import scandinave3 from '../Images/scandinave3.JPG';
// import fragole from '../Images/fragole.jpeg';
import Diaporama from './Diaporama';
import fragole1 from '../Images/Fragole/1.jpeg';
import fragole2 from '../Images/Fragole/2.jpeg';
import fragole3 from '../Images/Fragole/3.jpg';
import fragole4 from '../Images/Fragole/4.jpg';
import fragole5 from '../Images/Fragole/5.jpg';
import cocoon1 from '../Images/Cocoon/1.JPG';
import cocoon2 from '../Images/Cocoon/2.JPG';
import cocoon3 from '../Images/Cocoon/3.JPG';
import cocoon4 from '../Images/Cocoon/4.JPG';
import cocoon5 from '../Images/Cocoon/5.jpg';
import scandinave1 from '../Images/Scandinave/1.jpg';
import scandinave2 from '../Images/Scandinave/2.JPG';
import scandinave3 from '../Images/Scandinave/3.JPG';
import scandinave4 from '../Images/Scandinave/4.JPG';
import scandinave5 from '../Images/Scandinave/5.JPG';



function BookRoom(){
    window.scrollTo(0, 0);

    const picturesFragole = [fragole2, fragole1, fragole3, fragole4, fragole5];
    const picturesCocoon = [cocoon1, cocoon2, cocoon3, cocoon4, cocoon5];
    const picturesScandinave= [scandinave1, scandinave2, scandinave3, scandinave4, scandinave5]

    return(
        <div>
            <h1 className="bookRoom_title">Nos 3 Chambres d'Hôtes</h1>
            <div className="containerBookRoom">
                <div className="ElementRoom">
                    <p className="el"><b>FRAGOLE</b></p>
                    <div className="el testdiapo">
                        {/* <img className="imgRoombis" alt="Fragole" src={fragole}></img> */}
                        <Diaporama picturesList={picturesFragole}/>
                    </div>
                    <div className="el bookRoom_txt">
                        <p>Rdc - Accès PMR (2 pers)</p>
                        <p>1 lit 160x200</p>
                        <p>wc - SdB douche 180x150</p>
                        <p>TV - wifi</p>
                    </div>
                    <div className="el"><iframe className="containerIframe" title="planning fragole" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=1' ></iframe></div>
                </div>
                <div className="ElementRoom">
                    <p className="el"><b>SCANDINAVE</b></p>
                    <div className="el testdiapo">
                        {/* <img className="imgRoom" alt="Scandinave" src={scandinave3}></img> */}
                        <Diaporama picturesList={picturesScandinave}/>
                    </div>
                    <div className="el bookRoom_txt">
                        <p>Etage (4 pers)</p>
                        <p>1 lit 180x200 + possibilité 2 lits 90x200</p>
                        <p>wc - SdB douche 180x80</p>
                        <p>TV - wifi</p>
                    </div>
                    <div className="el"><iframe  className="containerIframe" title="Planning scandinave" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=2' ></iframe></div>
                </div>
                <div className="ElementRoom">
                    <p className="el"><b>COCOON</b></p>
                    <div className="el testdiapo">
                        {/* <img className="imgRoom" alt="Cocoon" src={cocoon3}></img> */}
                        <Diaporama picturesList={picturesCocoon}/>
                    </div>
                    <div className="el bookRoom_txt">
                        <p>Etage (5 pers)</p>
                        <p>1 lit 180x200 + possibilité 2 lits 90x200 ou 180x200 + 90x200</p>
                        <p>wc - SdB baignoire - TV - wifi</p>
                    </div>
                    <div className="el"><iframe className="containerIframe" title="Planning Cocoon" src='https://widget.itea.fr/widget.php?key=amkkhds7&numgite=2697&widget-itea=dispo&nbmois-ligne=1&numChambre=3' ></iframe></div>
                </div>
                
            </div>
            <div className="conatierButton">
                <p className="bookroomTxt">Pour réserver une chambre merci d'appeler au 06 31 84 42 39 ou par mail : coutureducharme@gmail.com</p>
                {/* <p className="ButtonBook2">Réserver</p> */}
            </div>
        </div>
    )
}
export default BookRoom;