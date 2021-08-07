const mongoose = require("mongoose");
require("dotenv").config();

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@dronacharya.luhed.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connect = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connect;