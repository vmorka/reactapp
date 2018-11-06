var Songs = require('../models/songs');

'use strict';

var mongoose = require('mongoose'),

Product = mongoose.model('songs');


exports.add = function(req, res) {

  var new_songs = new Song(req.body);

  new_songs.save(function(err, product) {

    if (err)

      res.send(err);

    res.json(product);

  });

};


