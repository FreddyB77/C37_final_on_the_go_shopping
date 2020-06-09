if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');

// import db
require('../db/mongoose');
// import routes
const userRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 8080;
// Parse incoming JSON into objects
app.use(express.json());
// Call routes
app.use(userRouter);

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
