const mongoose = require('mongoose');

const itemlistSchema = new mongoose.Schema({
  text: { type: String, required: true },
  number: { type: Number, required: true },
});

const ItemList = mongoose.model('ItemList', itemlistSchema);

module.exports = ItemList;