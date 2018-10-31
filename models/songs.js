const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    songTitle: {
        type: String
    },
    songArtist: {
        type: String
    }
})


module.exports = Song = mongoose.model('song', SongSchema);