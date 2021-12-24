const express = require("express");
const studentRouter = require("./student");

const router = express.Router();

router.use("/student", studentRouter);

module.exports = router;
