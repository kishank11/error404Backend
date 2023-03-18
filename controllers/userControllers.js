
const express = require("express");
const doc = require("../models/Doctor");
const hospital = require("../models/Hospital");
const patient = require("../models/Patient");
const relative = require("../models/PatientRelative");


const addDoc = async (req, res) => {
    const data = await doc.create(
        req.body
    );
    res.status(200).json({ data: data })
}
const getDocs = async (req, res) => {
    const data = await doc.find({})
    res.status(200).json({ data: data })
}
const getDocById = async (req, res) => {
    const data = await doc.find(({ _id: req.params.id })
    );
    res.status(200).json({ data: data })
}
const addHospital = async (req, res) => {
    const data = await hospital.create(
        req.body
    );
    res.status(200).json({ data: data })
}
const getHospitals = async (req, res) => {
    const data = await doc.find({})
    res.status(200).json({ data: data })
}
const getHospitalsById = async (req, res) => {
    const data = await doc.find(({ _id: req.params.id })
    );
    res.status(200).json({ data: data })
}
const addPatient = async (req, res) => {
    const data = await patient.create(
        req.body
    );
    res.status(200).json({ data: data })
}
const getPatients = async (req, res) => {
    const data = await doc.find({})
    res.status(200).json({ data: data })
}
const getPatientById = async (req, res) => {
    const data = await doc.find(({ _id: req.params.id })
    );
    res.status(200).json({ data: data })
}
const addRelative = async (req, res) => {
    const data = await relative.create(
        req.body
    );
    res.status(200).json({ data: req.body })
}
const getRelatives = async (req, res) => {
    const data = await doc.find({})
    res.status(200).json({ data: data })
}
const getRelativeById = async (req, res) => {
    const data = await doc.find(({ _id: req.parama.id })
    );
    res.status(200).json({ data: data })
}



module.exports = { addDoc, getDocById, getDocs, addHospital, getHospitals, getHospitalsById, addPatient, getPatientById, getPatients, addRelative, getRelativeById, getRelatives }