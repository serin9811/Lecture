const Lecture = require("../models/lecture.model.js");

exports.select = async (req, res) => {
  if (!req.param) {
    res.status(400).send({
      message: "Parameter cannot be empty",
    });
    return;
  }

  try {
    // Select lecture in database
    const selectResult = await Lecture.select(req.params.lectureIdx);
    console.log("selectResult: " + JSON.stringify(selectResult));

    if (!selectResult.length) {
      res.status(404).json({ message: "No such lecture" });
    }
    res.json(selectResult[0]);
  } catch (err) {
    res.status(500).json({ message: "" });
  }
};

exports.update = (req, res) => {
  let lectureIdx = req.params.lectureIdx;
  if (!req.body || !req.params) {
    res.status(400).send({
      message: "Parameter or Contents cannot be empty",
    });
    return;
  }

  Lecture.update(lectureIdx, req.body, (err) => {
    if (err) res.status(500).send({ message: err.message });
    else
      return res.send({
        resultCode: 200,
        resultMessage: req.params.lectureIdx + " lecture updated successfully",
      });
  });
};
