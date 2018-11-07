const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MakeSchema = new Schema({
    Make_Name: {
        unique: true,
        type: String
    },
    Make_ID: {
        unique: true,
        type: String
    }
})


module.exports = Song = mongoose.model('make', MakeSchema);