// const mongoClient = require('mongodb').mongoClient;
const Mongoose = require("mongoose");
// const assert = require('assert');
const localDB = `mongodb://127.0.0.1:27017/gyelopzhing`;
// const dbname = 'gyelopzhing';

const connectDB = async () => {
    await Mongoose.connect(localDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Databased Connected");

};
module.exports = connectDB;