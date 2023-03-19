const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,

    },
    doctors: { type: Array },
    patients: { type: Array },
    role: {
        type: String,
        default: "hospital"
    }
});
const hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = hospital;