const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');

const apiRouter = require('./api/api');

// Middlewear functions used in all routes
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());
app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;