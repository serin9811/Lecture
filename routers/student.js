const express = require("express");
const students = require("../controllers/student.controller.js");

const router = express.Router();

router.post("/new", students.create);

router.get("/:studentEmail", students.select);

router.delete("/:studentIdx", students.delete);

module.exports = router;
