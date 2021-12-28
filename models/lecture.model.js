const sql = require("../utils/db.js");

const Lecture = function (lecture) {
  this.categoryIdx = lecture.categoryIdx;
  this.lectureTitle = lecture.lectureTitle;
  this.lectureDesc = lecture.lectureDesc;
  this.lecturePrice = lecture.lecturePrice;
  this.isShowYN = lecture.isShowYN;
};

Lecture.select = (lectureIdx, result) => {
  sql.query(
    "SELECT * FROM tb_lecture WHERE `lectureIdx` = ?",
    lectureIdx,
    (err, res) => {
      if (err) {
        console.error("error: " + err);
        result(err, null);
        return;
      }
      console.log("select lecture: " + { res });
      result(null, { res });
    }
  );
};

Lecture.update = (lectureIdx, targetLecture, result) => {
  sql.query(
    "UPDATE tb_lecture SET `categoryIdx` = ?, `lectureTitle` = ?, `lectureDesc` = ?, `lecturePrice` = ?, `modifyDate` = NOW() WHERE `lectureIdx` = ?",
    targetLecture.categoryIdx,
    targetLecture.lectureTitle,
    targetLecture.lectureDesc,
    targetLecture.lecturePrice,
    lectureIdx,
    (err, res) => {
      if (err) {
        console.error("error: " + err);
        result(err, null);
        return;
      }
      result(null, { res });
    }
  );
};

module.exports = Lecture;
