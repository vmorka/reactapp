const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;

const Model = require('../../models/models')

const makes = [
    'audi',
    'bmw',
    'opel',
    'volvo',
    'Volkswagen',
    'Toyota',
    'Mercedes-Benz'
]

// router.get('/', function (req, res) {
//     makes.map(make =>
//     fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`)
//     .then(response => response.json())
//     .then(json => { 
//         mongoose.connect(db, { useNewUrlParser: true })
//         .then(() => console.log('MongoDB Prijungta...'))
//         .catch(err => console.log(err));

        
//         const newModel = new Model({ 
//             Model_Name: json.Results[0].Model_Name,
//             Model_ID: json.Results[0].Model_ID
//         });
//         newModel.save().then(model => res.json(model));


//         res.send('Automobiliu modeliu duomenys issaugoti duomenu bazeje')
//     })
//     )
// });


router.get('/', function (req, res) {
    makes.map(make =>
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`)
    .then(response => response.json())
    .then(json => { 
        mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('MongoDB Prijungta...'))
        .catch(err => console.log(err));

        json.Results.map(model => {
        const newModel = new Model({ 
            Model_Name: model.Model_Name,
            Model_ID: model.Model_ID,
            Make_ID: model.Make_ID,
            Make_Name: model.Make_Name
        });
        newModel.save().then(model => res.json(model));
    })

        res.send('Automobiliu modeliu duomenys issaugoti duomenu bazeje')
    })
    )
});



router.get('/get/:makeID', function (req, res) {
    Model.find({Make_ID: req.params.makeID, 
        // $or: [
        //     {Model_Name: /^\d+$/}
        //     // {Model_Name: /^5/},
        //     // {Model_Name: /^3/},
        //     // {Model_Name: /^7/}

        // ]
        })
    .limit(10)
    .then(models => res.json(models))
});
  module.exports = router;