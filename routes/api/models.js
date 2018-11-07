const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('../../config/keys').mongoURI;

const Model = require('../../models/models')

const models = [
    '485',
    '582',
    '471',
    '448',
    '482',
    '449',
    '452'

]

router.get('/', function (req, res) {
    models.map(model =>
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${model}?format=json`, 
    //{headers: {'Authorization' : 'Bearer BQBwfuag6graNRsotmbaQt_ljpiojyQ2QV4bfI2fLHNCXICLj1DQa7TRWkE10Kci_zppJ17pGS4hh2n1P4_awi1B7JYbqO2UJbp19fiVd5a4DwwpxkxrHiAt_G7yNaszReuayzeqc48xjeirN4v2TIsLqTSu'}}
    )
    .then(response => response.json())
    .then(json => { 
        mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('MongoDB Prijungta...'))
        .catch(err => console.log(err));
        const newModel = new Model({ 
            Model_Name: json.Results[0].Model_Name,
            Model_ID: json.Results[0].Model_ID
        });

        newModel.save().then(model => res.json(model));
        res.send('Automobiliu modeliu duomenys issaugoti duomenu bazeje')
    })
    )
});

router.post('/', function (req, res) {



});
  module.exports = router;