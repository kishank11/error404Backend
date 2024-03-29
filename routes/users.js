const { addDoc, addHospital, addRelative, addPatient, getDocs, getDocById, getPatients, getPatientById, getHospitals, getHospitalsById, getRelatives, getRelativeById } = require("../controllers/userControllers");

const express = require("express");

const app = express();
const router = express.Router();

router.route('/doc').post(addDoc)
router.route('/getDocs').get(getDocs)
router.route('/getDocById/:id').get(getDocById)


router.route('/hospital').post(addHospital)
router.route('/getHospitals').get(getHospitals)
router.route('/getHospitalById/:id').get(getHospitalsById)

router.route('/relative').post(addRelative)
router.route('/getRelatives').get(getRelatives)
router.route('/getRelativeById/:id').get(getRelativeById)

router.route('/patient').post(addPatient)
router.route('/getPatients').get(getPatients)
router.route('/getPatientById/:id').get(getPatientById)

module.exports = router;