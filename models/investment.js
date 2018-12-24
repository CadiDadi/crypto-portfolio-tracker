const mongoose = require('mongoose')
const Schema = mongoose.Schema

const investmentSchema = new Schema({
    purchaseDate: {
        type: Date,
        // default: Date.now,
        uppercase: false
    },
    name: {
        type: String,
        required: true,
    },
    //alternately, auto-fill symbol / vice-versa enter symbol, auto-fill name
    symbol: {
        type: String,
        uppercase: true
    },
    amountPurchased: {
        type: Number,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    }
    //need any more??
})

module.exports = mongoose.model('Investment', investmentSchema )