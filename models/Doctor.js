const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: { type: String },
    license_no: {
        type: String
    },
    email: {
        type: String
    },
    hospital: {
        type: Array
    },
    mob_no: { type: String },
    speciality: String,
    degree: String
});
const doc = mongoose.model("Doctor", doctorSchema);

module.exports = doc;