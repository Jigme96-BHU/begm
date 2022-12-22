const mongodb = require("../server_conn/db");
const flow = require("../schema/flow");
const level = require("../schema/level");

exports.flowid = async (req, res) => {
    try {

        const {flow_name,node_name} = req.body
        const id = req.params.id;
        console.log("ID",id);
        const data = await flow.find({ flow_name});
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}
exports.levelid = async (req, res) => {

    const {level_name,node_name} = req.body

    try {
        const id = req.params.id;
        const data = await level.find({ $or: [{ level_name }] });
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}



