const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const makes = require('./routes/api/makes');
const models = require('./routes/api/models');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
  


// DB config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Prijungta...'))
    .catch(err => console.log(err));

//use routes

app.use('/api/makes', makes);
app.use('/api/models', models);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serveris startavo ant ${port} porto`));