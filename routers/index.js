const express = require("express");
const studentRouter = require("./student");
const lectureRouter = require("./lecture");

const router = express.Router();

router.use("/student", studentRouter);

router.use("/lecture", lectureRouter);

module.exports = router;
