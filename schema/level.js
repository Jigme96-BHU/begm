const Mongoose = require("mongoose");

const levelSchema = new Mongoose.Schema({
    node_name:{
        type: String,
        required: true,
    },
    TIME:{
        type:String,
        required: true,
    },
    level_name:{
        type:String,

    },
    level:{
        type:String,
        required:true,
    }
},{
    timestamps: true
});
module.exports = Mongoose.model("level", levelSchema);

