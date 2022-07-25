const mongodb = require("../server_conn/db");
const nodeOne = require("../schema/node");
const level = require("../schema/level");


exports.flow = async(req,res) =>{
    try {
        const data = await nodeOne.find();
        res.status(200).json({data});
    } catch (error) {
        console.log("Error fatching data from database"+ error);
    }
}

exports.level = async(req,res) =>{
    try {
        const data = await level.find();
        res.status(200).json({data});
    } catch (error) {
        console.log("Error fatching data from database"+ error);
    }
}
