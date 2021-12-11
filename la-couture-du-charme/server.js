
const http = require('http');
const app = require('./app');
const path = require('path');
const express = require('express');

const stripe = require("stripe")("sk_test_51JKLlzFWy0s3veRrrKOLEWQnHpQMuMEPeQJWeZUm6u1YtQN0fYcDo4QcxTW6L0DoM1bdWBE2PeamG30L70zm27xj000SCUPvYB");


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

// app.use(express.static(path.resolve(__dirname,'./client/build')));



app.use('/api', route);


app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "EUR",
    
  });
  console.log(paymentIntent.client_secret)
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});


// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// })

server.listen(port);