const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
	name: String
})

module.exports = mongoose.model("Categories", categorieSchema);