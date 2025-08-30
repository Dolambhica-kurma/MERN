const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// @route   GET /allstudents
router.get("/allstudents", studentController.getAllStudents);

module.exports = router;