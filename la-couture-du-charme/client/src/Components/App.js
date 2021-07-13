import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Receiver from './Receiver';
import PrivateRoom from './PrivateRoom';
import PrivatePool from './PrivatePool';
import PrivateSpa from './PrivateSpa';
import Book from './Book';
import MentionsLegales from './MentionsLegales';
import '../CSS/App.css';
import {Route, Switch} from 'react-router-dom';
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
          <Route path='/privatePool' component={PrivatePool}/>
          <Route path='/privateSpa' component={PrivateSpa}/>
          <Route path='/Book' component={Book}/>
          <Route path='/MentionsLégales' component={MentionsLegales}/>
        </Switch>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;


