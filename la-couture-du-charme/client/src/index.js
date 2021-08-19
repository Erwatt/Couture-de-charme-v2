import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './Components/App';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe("pk_test_51JKLlzFWy0s3veRrxsohTmNgi5LdmSqBZDAyHHkce2q8JT80kWCM22PglHlQMAjoRZPe239mgXIwoyAK7FY9eCTO00FDLClGaK");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Elements stripe={stripePromise}>
        <App/>
      </Elements>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
