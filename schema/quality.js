const Mongoose = require("mongoose");

const qualitySchema = new Mongoose.Schema({
    Quality_name: {
        type: String,
        required: true,
    },
    time: {
        type: String,

    },
    value: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
module.exports = Mongoose.model("quality", qualitySchema);

