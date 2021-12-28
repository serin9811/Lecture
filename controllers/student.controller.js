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

  // Save student in database
  try {
    const val = await Student.create(student);

    if (!val.length) {
      res.status(400).json({ message: "Already Exist" });
      return;
    }
    res.json(val[0]);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.select = (req, res) => {
  if (!req.param) {
    res.status(400).send({
      message: "Parameter cannot be empty",
    });
    return;
  }

  // Select count of students in database
  Student.select(req.params.studentEmail, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else return res.send(data);
  });
};

exports.delete = async (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "Parameter cannot be empty",
    });
    return;
  }

  // Delete student in database
  try {
    const val = await Student.delete(req.params.studentIdx);
    if (!val.length) {
      res.status(404).json({ message: "Not exist" });
      return;
    }
    res.json(val[0]);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
