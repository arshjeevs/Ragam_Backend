const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  published_year: { type: Number, required: true },
  genre: { type: String, required: true },
  available_copies: { type: Number, default: 1 },
});

module.exports = mongoose.model('Book', BookSchema);
