const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,

    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    role: {
        type: String,
        default: "hospital"
    }
});
const hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = hospital;