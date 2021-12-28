const express = require("express");
const lectures = require("../controllers/lecture.controller.js");

const router = express.Router();

router.get("/:lectureIdx", lectures.select);

router.put("/:lectureIdx", lectures.update);

module.exports = router;
