const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const songs = require('./routes/api/songs');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Prijungta...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/songs', songs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serveris startavo ant ${port} porto`));