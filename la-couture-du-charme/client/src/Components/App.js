import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Receiver from './Receiver';
import PrivateRoom from './PrivateRoom';
import '../CSS/App.css';
import {Route, Switch} from 'react-router-dom';
// import {useState} from 'react';



function App() {

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
          <Route exact path='/Message' component={Receiver}/>
          <Route exact path='/PrivateRoom' component={PrivateRoom}/>
        </Switch>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
