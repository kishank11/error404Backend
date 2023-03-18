const { addDoc, addHospital, addRelative, addPatient } = require("../controllers/userControllers");

const router = require("express").Router();

router.route('/doc').post(addDoc)
router.route('/hospital').post(addHospital)
router.route('/relative').post(addRelative)
router.route('/patient').post(addPatient)

module.exports = router;