const req = require("express/lib/request");
const res = require("express/lib/response");
const Student = require("../models/student.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }

  const student = new Student({
    studentName: req.body.studentName,
    studentEmail: req.body.studentEmail,
    studentUserName: req.body.studentUserName,
  });

  // Save student in database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message,
      });
    else res.send(data);
  });
};
