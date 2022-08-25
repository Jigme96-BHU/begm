// const mongoClient = require('mongodb').mongoClient;
const Mongoose = require("mongoose");
// const assert = require('assert');
// const localDB = `mongodb://127.0.0.1:27017/gyelpozhing`;
// const dbname = 'gyelopzhing';

const connectDB = async () => {
    await Mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("Databased Connected"))
    .catch(err=>console.log(err));

};
module.exports = connectDB;
