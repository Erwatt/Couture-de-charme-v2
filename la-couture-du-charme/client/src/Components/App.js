import React from 'react';
import Header from './Header';
//import Header2 from './BookTempo';
import '../CSS/App.css'
import Home from './Home';
import Footer from './Footer';
import Receiver from './Receiver';
import PrivateRoom from './PrivateRoom';
import PrivatePool from './PrivatePool';
import PrivateSpa from './PrivateSpa';
import Gift from './Gift';
// import Book from './Book';
import Book2 from './Book2';

import BookTempo from './BookTempo';

import MentionsLegales from './MentionsLegales';
import '../CSS/App.css';
import {Route, Switch} from 'react-router-dom';
import BkSpa from './BookSpa';
import BkRoom from './BookRoom';
import Tarifs from './Tarifs';
import Modelling from './Modeling';
import Spa from './Spa';
// import {useState} from 'react';



function App() {

  // const [anim1, setAnim1] = useState(false);
  //   const [anim2, setAnim2] = useState(false);
  //   const [anim3, setAnim3] = useState(false);
  //   const [anim4, setAnim4] = useState(false);

  // const [data, setData] = useState(null);
  
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      {/* <p className="momo">{!data ? "Loading" : data}</p> */}
      <div>
        <Header/>
      </div>
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Message' component={Receiver}/>
          <Route path='/PrivateRoom' component={PrivateRoom}/>
          <Route path='/PrivatePool' component={PrivatePool}/>
          <Route path='/PrivateSpa' component={PrivateSpa}/>
          <Route path='/Book' component={Book2}/>
          <Route path='/BookSpa' component={BkSpa}/>
          <Route path='/BookRoom' component={BkRoom}/>
          <Route path='/Gift' component={Gift}/>
          <Route path='/Tarifs' component={Tarifs}/>
          <Route path='/MentionsLégales' component={MentionsLegales}/>
          <Route path='/Modelling' component={Modelling}/>
          <Route path='/Spa' component={Spa}/>

          

        </Switch>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;


