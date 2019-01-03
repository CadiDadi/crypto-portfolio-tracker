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
        enum: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Litecoin'],
        required: true
    },
    //alternately, auto-fill symbol / vice-versa enter symbol, auto-fill name
    symbol: {
        type: String,
        enum: ['BTC', 'ETH', 'BCH', 'LTC'],
        uppercase: true,
        required: true
    },
    amountPurchased: {
        type: Number,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Investment', investmentSchema )