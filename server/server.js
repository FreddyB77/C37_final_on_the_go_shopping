if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const path = require('path');
const cors = require('cors')

// import db
require('../db/mongoose');
// import routes
const userRouter = require('./routes/users');
const apiRouter = require('./routes/apiroutes');
const locationRoutes = require('./routes/locations');

const stripeRouter = require('./routes/stripeapis');
const app = express();
const port = process.env.PORT || 8080;
// Parse incoming JSON into objects
app.use(express.json());
app.use(cors())
// Call routes
app.use(userRouter);
app.use(apiRouter);
app.use(locationRoutes);
app.use(stripeRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
