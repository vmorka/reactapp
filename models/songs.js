const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {
        type: String
    },
    artist: {
        type: String
    }
})


module.exports = Song = mongoose.model('song', SongSchema);