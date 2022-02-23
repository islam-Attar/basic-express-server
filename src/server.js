'use strict';

const express = require('express');
const app = express();
const cors = require('cors');


const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');





app.use(express.json());
app.use(cors());
app.use(logger);




app.get('/', (req, res) => {
  res.send('Home Route')
})

app.get('/person', validator, (req, res) => {
  
  res.status(200).json({

    name: req.query.name
  })
})






app.use(notFound);
app.use(serverError);


function start(port) {
  app.listen(port,()=> {
    console.log(`running on PORT ${port}`);
  })
}

module.exports = {
  app: app,
  start: start
}