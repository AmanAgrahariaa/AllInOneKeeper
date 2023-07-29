const mongoose = require('mongoose');

const passwordUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const PasswordUser = mongoose.model('PasswordUser', passwordUserSchema);

module.exports = PasswordUser;

