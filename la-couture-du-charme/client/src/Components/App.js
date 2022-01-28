import React from 'react';
import GA4React from "ga-4-react";
import { Route, Switch } from 'react-router-dom';

import Header from './header';
import '../css/app.css'
import Home from '../pages/home';
import Footer from './footer';
import Receiver from './receiver';
import PrivatePool from '../pages/piscine-privee';
import PrivateSpa from '../pages/spa-privatif';
import PrivateSauna from '../pages/sauna-privatif'
import Gift from './gift';
import Book2 from './book2';
import MentionsLegales from './mentionslegales';
import '../css/app.css';
import BkSpa from './bookspa';
import ChambresHotes from '../pages/chambres-hotes';
import Tarifs from './tarifs';
import Modelling from './modeling';
import Massage from '../pages/massage'
import Spa from './spa';
import CheckoutForm from './checkoutform';



function App() {
  
  //Google Analytics 4
//   try {
//   setTimeout(_ => {
//     const ga4react = new GA4React("G-DB7YNEWFMK");
//     ga4react.initialize();

//   }, 4000);
// } catch (err) {}

  //Google Analytics 4
const ga4react = new GA4React(
  'G-DB7YNEWFMK',
  )
  ga4react.initialize().then((ga4) => {
    ga4.pageview('path')
    ga4.gtag('event','pageview','path') // or your custom gtag event
  },(err) => {
    console.error(err)
  })



  return (
    <React.Fragment>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Message' component={Receiver} />
        {/* <Route path='/PrivateRoom' component={PrivateRoom} /> */}
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


