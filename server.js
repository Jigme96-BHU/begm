const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongodb = require("./server_conn/db");
const client = require("./server_conn/mqtt");
const mqttdata = require("./subscribe/data");
const app = express();
dotenv.config({ path: './.env'});

const port = process.env.PORT;

mongodb();

client.on('connect',()=>{
    console.log("MQTT Broker Connected");

});
client.on('error',()=>{
    console.log('Error connecting to MQTT Broker');
});


mqttdata();

//define routes
app.use('/data', require('./routes/auth'));

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
});