import React from 'react';
import Header from './Header';
//import Header2 from './BookTempo';
import '../CSS/App.css'
import Home from '../pages/home';
import Footer from './Footer';
import Receiver from './Receiver';
import PrivateRoom from './PrivateRoom';
import PrivatePool from '../pages/piscine-privee';
import PrivateSpa from '../pages/spa-privatif';
import PrivateSauna from '../pages/sauna-privatif'
import Gift from './Gift';
// import Book from './Book';
import Book2 from './Book2';

// import BookTempo from './BookTempo';

import MentionsLegales from './MentionsLegales';
import '../CSS/App.css';
import { Route, Switch } from 'react-router-dom';
import BkSpa from './BookSpa';
import ChambresHotes from '../pages/chambres-hotes';
import Tarifs from './Tarifs';
import Modelling from './Modeling';
import Massage from '../pages/massage'
import Spa from './Spa';
import CheckoutForm from './CheckoutForm';
import GA4React from "ga-4-react";


// import {useState} from 'react';



function App() {
  
  //Google Analytics 4
  try {
  setTimeout(_ => {
    const ga4react = new GA4React("G-DB7YNEWFMK");
    ga4react.initialize();
  }, 4000);
} catch (err) {}

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
    <React.Fragment>
      {/* <p className="momo">{!data ? "Loading" : data}</p> */}

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Message' component={Receiver} />
        <Route path='/PrivateRoom' component={PrivateRoom} />
        <Route path='/piscine-privee' component={PrivatePool} />
        <Route path='/spa-privatif' component={PrivateSpa} />
        <Route path='/sauna-privatif' component={PrivateSauna} />
        <Route path='/book' component={Book2} />
        <Route path='/BookSpa' component={BkSpa} />
        <Route path='/chambres-hotes' component={ChambresHotes} />
        <Route path='/Gift' component={Gift} />
        <Route path='/Tarifs' component={Tarifs} />
        <Route path='/mentions-legales' component={MentionsLegales} />
        <Route path='/Modelling' component={Modelling} />
        <Route path='/massage' component={Massage} />
        <Route path='/Spa' component={Spa} />
        <Route path='/PaymentComponent' component={CheckoutForm} />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}

export default App;


