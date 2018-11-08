const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;

const Make = require('../../models/makes')

const makes = [
    'audi',
    'bmw',
    'opel',
    'volvo',
    'Volkswagen',
    'Toyota',
    'Mercedes-Benz',
    'ford'
]

router.get('/', function (req, res) {
    makes.map(make =>
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`)
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
        res.send('Automobiliu markiu duomenys issaugoti duomenu bazeje')
    })
    )
});


router.get('/get', function (req, res) {
    Make.find()
    .then(makes => res.json(makes))
});
  module.exports = router;