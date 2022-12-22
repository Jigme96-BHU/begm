const mongodb = require("../server_conn/db");
const flow = require("../schema/flow");
const level = require("../schema/level");


exports.flow = async (req, res) => {
    try {

        const data = await flow.find();
        res.status(200).json({ data });
    } catch (error) {
        console.log("Error fatching data from database" + error);
    }
}

exports.level = async (req, res) => {
    try {
        const data = await level.find();
        //console.log(data)
        res.status(200).json({ data });
    } catch (error) {
        console.log("Error fatching data from database" + error);
    }
}
