const express = require("express");
const students = require("../controllers/student.controller.js");

const router = express.Router();

router.post("/new", students.create);

module.exports = router;
