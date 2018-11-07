const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('../../config/keys').mongoURI;

const Make = require('../../models/makes')

const makes = [
    'audi',
    'bmw',
    'opel',
    'volvo',
    'Volkswagen',
    'Toyota',
    'Mercedes-Benz'
]

router.get('/', function (req, res) {
    makes.map(make =>
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`, 
    //{headers: {'Authorization' : 'Bearer BQBwfuag6graNRsotmbaQt_ljpiojyQ2QV4bfI2fLHNCXICLj1DQa7TRWkE10Kci_zppJ17pGS4hh2n1P4_awi1B7JYbqO2UJbp19fiVd5a4DwwpxkxrHiAt_G7yNaszReuayzeqc48xjeirN4v2TIsLqTSu'}}
    )
    .then(response => response.json())
    .then(json => { 
        mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('MongoDB Prijungta...'))
        .catch(err => console.log(err));
        const newMake = new Make({ 
            Make_Name: json.Results[0].Make_Name,
            Make_ID: json.Results[0].Make_ID
        });

        newMake.save().then(make => res.json(make));
        res.send('Duomenys issaugoti duomenu bazeje')
    })
    )
});

router.post('/', function (req, res) {



});
  module.exports = router;