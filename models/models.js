const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    Model_Name: {
        type: String,
        unique: true
    },
    Model_ID: {
        type: String,
        unique: true
    }
})


module.exports = Song = mongoose.model('model', ModelSchema);