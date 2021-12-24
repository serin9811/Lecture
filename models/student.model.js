const sql = require("./db.js");

const Student = function (student) {
  this.studentName = student.studentName;
  this.studentEmail = student.studentEmail;
  this.studentUserName = student.studentUserName;
};

Student.create = (newStudent, result) => {
  sql.query("INSERT INTO tb_student SET ?", newStudent, (err, res) => {
    if (err) {
      console.error("error: " + err);
      result(err, null);
      return;
    }

    console.log("create stuent: ", {
      id: res.insertId,
      ...newStudent,
    });
    result(null, { id: res.insertId, ...newStudent });
  });
};

module.exports = Student;
