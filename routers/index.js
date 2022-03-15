const express = require("express");
const studentRouter = require("./student");
const lectureRouter = require("./lecture");
const paymentRouter = require("./payment");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Lecutres
 *   description: Lecture Management
 */
router.use("/lectures", lectureRouter);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student Management
 */
router.use("/students", studentRouter);

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment Management
 */
router.use("/payments", paymentRouter);

module.exports = router;
