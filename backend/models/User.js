// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    Vehicle_make: { type: String, required: true },
    Vehicle_model: { type: String, required: true },
    Vehicle_year: {type: Number, required: true}
});

module.exports = mongoose.model('User', userSchema);