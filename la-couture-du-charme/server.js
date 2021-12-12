
const http = require('http');
const app = require('./app');
const path = require('path');
const express = require('express')

// NOUVEAU CODE STRIPE DAVID
require('dotenv').config()
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)


const calculateOrderAmount = items => {
  
  return items[0].price*100;
};

const route = require('./route/route');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3001');
// app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

app.use(express.static(path.resolve(__dirname,'./client/build')));

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if(req.header('x-forwarded-proto') !== 'https'){
      res.redirect(`https://www.${req.header('host')}${req.url}`)
    } else {
      next()
    }
  })
}



app.use('/api', route);

//ANCIEN CODE
// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;

// })
  
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "EUR",
    
//   });
//   res.send({
//     clientSecret: paymentIntent.client_secret
//   });
//   console.log(paymentIntent)
// });


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
})


// NOUVEAU CODE STRIPE DAVID
app.post('/api/pay', async (req, res) =>{

  const { items } = req.body;


  try{

    const paymentIntent = await stripe.paymentIntents.create({
      amount:calculateOrderAmount(items),
      currency: 'eur',
      payment_method_types: ['card'],
      metadata: {
        name: 'value'
      }
    })

      const clientSecret = paymentIntent.client_secret
      res.json({ clientSecret, message: 'Paiement effectue avec succes!'})

  } catch (err){
    console.error(err)
    res.status(500).json({ message: 'Erreur serveur interne Stripe'})
  }

})

app.post('/stripe', (req, res) =>{
  if(req.body.type === 'payment_intent.created'){
    console.log(`${req.body.data.object.metadata.name} paiement créé!`)
  }
  if(req.body.type === 'payment_intent.succeeded'){
    console.log(`${req.body.data.object.metadata.name} paiement effectue avec succes!`)
  }
})





server.listen(port);