const Mongoose = require("mongoose");

const valveSchema = new Mongoose.Schema({
    node_name:{
        type: String,
        required: true,
    },
    valve_name:{
        type:String,

    },
    valve_percent:{
        type: String,
        required: true,
    },
    valve_status:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
},{
    timestamps: true
});
module.exports = Mongoose.model("valve", valveSchema);

