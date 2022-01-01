const Lecture = require("../models/lecture.model.js");

exports.selectOne = async (req, res) => {
  if (!req.param) {
    res.status(400).send({
      message: "Parameter cannot be empty",
    });
    return;
  }

  try {
    // Select lecture in database
    const selectResult = await Lecture.selectIdx(req.params.lectureIdx);

    if (!selectResult.length) {
      res.status(404).json({ message: "No such lecture" });
    }
    res.json(selectResult[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

exports.selectList = async (req, res) => {
  try {
    const lectureList = await Lecture.selectList(req);
    if (!lectureList.length) {
      res.status(404).json({ message: "No lecture" });
    }
    res.json(lectureList[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  const lecture = new Lecture({
    categoryIdx: req.body.categoryIdx,
    teacherIdx: req.body.teacherIdx,
    lectureTitle: req.body.lectureTitle,
    lectureDesc: req.body.lectureDesc,
    lecturePrice: req.body.lecturePrice,
    isShowYN: req.body.isShowYN,
  });

  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  try {
    // Save lecture in database
    const createResult = await Lecture.create(lecture);

    if (!createResult.length) {
      res.status(400).json({ message: "Already Exist" });
      return;
    }
    console.log(JSON.stringify(createResult));
    res.json(createResult[0]);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
