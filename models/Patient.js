const mongoose = require("mongoose");


const patientSchema = new mongoose.Schema({
    name: {
        type: String

    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    emergency_mob_no: { type: String },
    insurance_id: {
        type: String
    },
    blood_group: { type: String }
    ,
    role: {
        type: String,
        default: "patient"
    }
});

const patient = mongoose.model("Patient", patientSchema);
module.exports = patient