const express = require("express");
const students = require("../controllers/student.controller.js");

const router = express.Router();

/**
 * @swagger
 * definitions:
 *   Student:
 *     required:
 *      - studentName
 *      - studentEmail
 *      - studentUserName
 */

/**
 * @swagger
 *      /students:
 *     post:
 *       tags:
 *        - Students
 *       description: Create new user
 *       produces:
 *        - application/json
 *       parameters:
 *         - name: studentName
 *           description: Full name of use who signs up
 *           type: string
 *       responsese:
 *         200:
 *           schema:
 *           type: object
 *           $ref: '#/definitions/Student'
 *
 */
router.post("", students.create);

router.delete("/:studentIdx", students.delete);

module.exports = router;
