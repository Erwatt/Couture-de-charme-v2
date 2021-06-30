import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import HomeRooms from './Components/HomeRooms';
import HomePiscine from './Components/HomePiscine';
import HomeSpa from './Components/HomeSpa';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    

      <HomeRooms/>
      <HomePiscine/>
      <HomeSpa/>

      

      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
