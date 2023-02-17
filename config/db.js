const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connection = mongoose.connect(
  "mongodb+srv://sanket1234:sanket1234@cluster0.e1xymh7.mongodb.net/test"
);

module.exports = { connection };