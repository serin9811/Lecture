const express = require("express");
const studentRouter = require("./student");
const lectureRouter = require("./lecture");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management
 */
router.use("/student", studentRouter);

/**
 * @swagger
 * tags:
 *   name: Lecutres
 *   description: Lecture management
 */
router.use("/lecture", lectureRouter);

module.exports = router;
