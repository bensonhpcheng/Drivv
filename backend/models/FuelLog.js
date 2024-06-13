// models/FuelLog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fuelLogSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    mileage: { type: Number, required: true },
    fuel_price: {type: Number, required: true},
    fuel_amount: { type: Number, required: true },
    cost: { type: Number, required: true }
});

module.exports = mongoose.model('FuelLog', fuelLogSchema);