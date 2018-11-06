const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('../../config/keys').mongoURI;

const Song = require('../../models/songs')

router.get('/', function (req, res) {
    fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', 
    {headers: {'Authorization' : 'Bearer BQAPhWcbWoZOjq5a4OmS51-6ydP9QiwyJBG4bGYQOOAYpW9a6a-QdOpL_1WdaQ8xuKgHBnAr0VuR1IzbZxCn7ZMKXUTykScferAhGqF8UBnbrSxyxNXjOvP3Q2IIOquCKvxh2La7yZ8BTE8PO7blSFbFrZuk'}})
    .then(response => response.json())
    .then(json => { //res.json(json)
        mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('MongoDB Prijungta...'))
        .catch(err => console.log(err));
        const newSong = new Song({
            name: json.name
        });
    
        newSong.save().then(song => res.json(song));
        res.send('Duomenys issaugoti duomenu bazeje')
    })
});

router.post('/', function (req, res) {



});
  module.exports = router;