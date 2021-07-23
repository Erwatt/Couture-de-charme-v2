// import React from 'react';
// import '../CSS/Promise.css'

// export default function Promise({size, room, pool}){

//     function handleRoomScroll(){
//         room.current.scrollIntoView({behavior: "smooth", block: "start"});
//     }

//     function handlePoolScroll(){
//         pool.current.scrollIntoView({behavior: "smooth", block: "start"});
//     }
 
//     return size==='big' ?(
//         <div className='lcc-panel'>
//             <div className='lcc-slogan'>
//                 {/* <h1 className='titre'>Une parenthèse</h1> */}
//                 <h1 className='titre2'>Une parenthèse dans votre quotidien</h1>

//                 <div className='box-place'>
//                     <div className='box1' onClick={handlePoolScroll}>Spa</div>
//                     <div className='box2' onClick={handleRoomScroll}>Chambres d'hôtes</div>
//                 </div>
//             </div>
            
//             <div className='lcc-choix'>
//                     <li>Piscine</li>
//                     <li>Spa</li>
//                     <li>Sauna</li>
//                     <li>Modelage</li>
//                     <li>Activités</li>   
//             </div>
//         </div>
//     ):(
//         <div className='lcc-panel2'>
//                 <div className='lcc-slogan2'>
//                     <h1 className='titre2'>tartiflette Ipsum Dolor</h1>
//                 </div>
//         </div>
//     );
// };