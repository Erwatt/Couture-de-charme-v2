import React from 'react';
import '../CSS/Promise.css'

export default function Promise({size}){
 
    return size==='big' ?(
        <div className='lcc-panel'>
            <div className='lcc-slogan'>
                <h1 className='titre'>Lorem Ipsum Dolor</h1>
                <div className='box-place'>
                    <div className='box1'>Spa</div>
                    <div className='box2'>Chambres d'hôtes</div>
                </div>
            </div>
            
            <div className='lcc-choix'>
                    <li>Piscine</li>
                    <li>Spa</li>
                    <li>Sauna</li>
                    <li>Modelage</li>
                    <li>Activités</li>   
            </div>
        </div>
    ):(
        <div className='lcc-panel2'>
                <div className='lcc-slogan2'>
                    <h1 className='titre2'>Lorem Ipsum Dolor</h1>
                </div>
        </div>
    );
};