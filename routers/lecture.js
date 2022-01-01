const express = require("express");
const lectures = require("../controllers/lecture.controller.js");

const router = express.Router();

//Read a list of lectures
router.get("/list", lectures.selectList);

//Read a detail of lecture
router.get("/:lectureIdx", lectures.selectOne);

//Create a lecture
router.post("/new", lectures.create);

//Update a lecture
router.put("/:lectureIdx", lectures.update);

module.exports = router;
