const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    specialty: {
        type: String,

    },
    hospital: {
        type: Array
    },
    role: {
        type: String,
        default: "doctor"
    }
});
const doc = mongoose.model("Doctor", doctorSchema);

module.exports = doc;