// config/database.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connect() {
  return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = { connect };