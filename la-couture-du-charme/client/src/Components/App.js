import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import '../CSS/App.css';



function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div className="content">
        <Home/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
