const mongoose = require("mongoose");


const relativeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    relationship: {
        type: String
    },
    patient: {
        type: Array
    },
    role: {
        type: String,
        default: "relative"
    }
});
const relative = mongoose.model("Relative", relativeSchema);
module.exports = relative;