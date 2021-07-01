import React from 'react';
import Header from './Header';
import Home from './Home';
import '../CSS/App.css';
import logo from '../Images/logo.png';


function App() {
  return (
    <div className="App">
      <div id="my-header">
        <Header/>
      </div>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
