import React, { useState, useEffect } from "react";
// import logocouture from '../Images/logo.png'
import '../CSS/CheckoutForm.scss'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";



export default function CheckoutForm({element,prix, ligne1}) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id : element ,price:prix}]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, [element, prix]);

  const cardStyle = {
    style: {
      hidePostalCode: true,
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <div className="PaymentContainer">
    <form id="payment-form" onSubmit={handleSubmit}>
    {
        succeeded===false?
        <div>
      <div className="containerInput">

        <div className="containerElementInput">
          <label for="name">Nom :</label>
          <input className="Inputtest" type="text" id="Name" name="Nom" required minlength="2"  maxlength="30" size="10" />
        </div>
        <div className="containerElementInput">
          <label for="name">Prénom :</label>
          <input className="Inputtest" type="text" id="firstName" name="Prénom" required minlength="2" maxlength="20" size="10"/>
        </div>
      </div>
      
          <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
          <button disabled={processing || disabled || succeeded}id="submit">
          <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>) : ("Commander")}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
        </div>:
        false
      }




      
      {/* Show a success message upon completion */}
      {succeeded ?
      <p className="successMessage">
        Merci
        <a href={`https://dashboard.stripe.com/test/payments`}>{" "} Stripe dashboard.</a>
      </p>:false}
    </form>
    </div>
  );
}
