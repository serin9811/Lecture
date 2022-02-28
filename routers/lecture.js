const express = require("express");
const lectures = require("../controllers/lecture.controller.js");

const router = express.Router();

//Read a list of lectures
router.get("", lectures.selectList);

//Read a detail of lecture
router.get("/:lectureIdx", lectures.selectOne);

//Create a lecture
router.post("", lectures.create);

//Update specific lecture
router.put("/:lectureIdx", lectures.update);

//Update the visibility of specific lecture
router.patch("/:lectureIdx", lectures.patch);

module.exports = router;
