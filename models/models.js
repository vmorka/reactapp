const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    Model_Name: {
        type: String
    },
    Model_ID: {
        type: String
    }
})


module.exports = Song = mongoose.model('model', ModelSchema);