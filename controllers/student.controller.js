const res = require("express/lib/response");
const Student = require("../models/student.model.js");

exports.create = async (req, res) => {
  const student = new Student({
    studentName: req.body.studentName,
    studentEmail: req.body.studentEmail,
    studentUserName: req.body.studentUserName,
  });

  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  try {
    // Save student in database
    const createResult = await Student.create(student);

    if (!createResult.length) {
      res.status(400).json({ message: "Already Exist" });
      return;
    }
    res.json(createResult[0]);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.delete = async (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "Parameter cannot be empty",
    });
    return;
  }

  try {
    // Delete student in database
    const deleteResult = await Student.delete(req.params.studentIdx);
    if (!deleteResult.length) {
      res.status(404).json({ message: "Not exist" });
      return;
    }
    res.json(deleteResult[0]);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
