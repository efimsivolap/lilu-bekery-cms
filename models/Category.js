const mongoose = require("mongoose");
// создаем схему
const Schema = mongoose.Schema;

const categorySchema = new Schema({});

module.exports = mongoose.model("categories", categorySchema);
