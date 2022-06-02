const express = require("express");
const router = express.Router();

const visitControllers = require("../controllers/visitControllers");

router.post("/userRegister", visitControllers.userRegister);

router.post("/userLogin", visitControllers.userLogin);

router.post("/staffLogin", visitControllers.staffLogin);

module.exports = router;
