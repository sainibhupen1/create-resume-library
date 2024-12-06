const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    book: { type: String, required: true },
    price: { type: Number, required: true },
})

module.exports = mongoose.model("products", productSchema);