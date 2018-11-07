const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MakeSchema = new Schema({
    Make_Name: {
        type: String
    },
    Make_ID: {
        type: String
    }
})


module.exports = Song = mongoose.model('make', MakeSchema);