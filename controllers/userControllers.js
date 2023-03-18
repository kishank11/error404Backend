
const express = require("express");
const doc = require("../models/Doctor");
const hospital = require("../models/Hospital");
const patient = require("../models/Patient");
const relative = require("../models/PatientRelative");


const addDoc = (req, res) => {
    doc.create(
        req.body
    );
}
const addHospital = (req, res) => {
    doc.create(
        req.body
    );
}
const addPatient = (req, res) => {
    doc.create(
        req.body
    );
}
const addRelative = (req, res) => {
    doc.create(
        req.body
    );
}

module.exports = { addDoc, addHospital, addPatient, addRelative }