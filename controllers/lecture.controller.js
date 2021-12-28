const Lecture = require("../models/lecture.model.js");

exports.select = (req, res) => {
  if (!req.param) {
    res.status(400).send({
      message: "Parameter cannot be empty",
    });
    return;
  }

  // Select lecture in database
  Lecture.select(req.params.lectureIdx, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else return res.send(data);
  });
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
