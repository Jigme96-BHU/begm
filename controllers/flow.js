const mongodb = require("../server_conn/db");
const nodeOne = require("../schema/node");
const level = require("../schema/level");

exports.flowid = async(req,res) =>{
    try {
        const id = req.params.id;
        const data = await nodeOne.find({$or:[{"flow_name":id},{"node_name":id}]});
        const data1 = await level.find({$or:[{"flow_name":id},{"node_name":id}]});
        if(data.length){
            res.status(200).json(data);
        }else{
            res.status(200).json(data1);
        } 
    } catch (error) {
        console.log(error);   
    }
}



