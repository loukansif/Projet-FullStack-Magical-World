const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
	name: String,
    description: String,
    price: Number,
    category: String
})

module.exports = mongoose.model("Toys", toySchema);