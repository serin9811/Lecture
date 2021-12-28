const { pQuery } = require("../utils");

const Student = function (student) {
  this.studentName = student.studentName;
  this.studentEmail = student.studentEmail;
  this.studentUserName = student.studentUserName;
};

Student.create = async (newStudent) => {
  try {
    const count = await Student.selectCount(newStudent.studentEmail);
    const { duplicatedEmailCount } = count[0];

    if (duplicatedEmailCount > 0) {
      return [];
    }
    const value = await pQuery("INSERT INTO tb_student SET ?", newStudent);
    const result = await Student.selectByIdx(value.insertId);
    return result;
  } catch (err) {
    throw err;
  }
};

Student.selectByEmail = (studentEmail) =>
  pQuery("SELECT * FROM tb_student WHERE `studentEmail` = ?", studentEmail);

Student.selectCount = (studentEmail) =>
  pQuery(
    "SELECT COUNT(*) AS duplicatedEmailCount FROM tb_student WHERE `studentEmail` = ?",
    studentEmail
  );

Student.selectByIdx = (studentIdx) =>
  pQuery("SELECT * FROM tb_student WHERE `studentIdx` = ?", studentIdx);

Student.delete = async (studentIdx) => {
  try {
    const deletedStudent = await Student.selectByIdx(studentIdx);
    await pQuery("DELETE FROM tb_student WHERE `studentIdx` = ?", studentIdx);
    return deletedStudent;
  } catch (err) {
    throw err;
  }
};

module.exports = Student;
