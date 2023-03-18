const mongoose = require("mongoose");


const patientSchema = new mongoose.Schema({
    name: {
        type: String

    },
    age: {
        type: Number

    },
    doctor: {
        type: Array

    },
    hospital: {
        type: Array

    }
    ,
    role: {
        type: String,
        default: "patient"
    }
});

const patient = mongoose.model("Patient", patientSchema);
module.exports = patient