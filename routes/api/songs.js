const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios');

const Song = require('../../models/songs')

router.get('/', function (req, res) {
    fetch('https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_SE&limit=10&offset=5', 
    {headers: {'Authorization' : 'Bearer BQBc1B-4eYZcdwUyfxgT_P9KgIWzZmU1jPY2Pk6Jn8PYSGbyLH5VoUgXgNzbPq68HsM7hKTRHFQt_a2LIGiXUFpHfKMwqRUN_Dtan9hDUG5-9_sR2l3d7SuemaBx13C8bhTG953DUfV5oJ75V3Y7MA2gzr0w'}})
    .then(response => response.json())
    .then(json => res.json(json))
});
  module.exports = router;