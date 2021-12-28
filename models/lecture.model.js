const { pQuery } = require("../utils");

const Lecture = function (lecture) {
  this.categoryIdx = lecture.categoryIdx;
  this.lectureTitle = lecture.lectureTitle;
  this.lectureDesc = lecture.lectureDesc;
  this.lecturePrice = lecture.lecturePrice;
  this.isShowYN = lecture.isShowYN;
};

Lecture.select = async (lectureIdx) =>
  pQuery("SELECT * FROM tb_lecture WHERE `lectureIdx` = ?", lectureIdx);

Lecture.update = (lectureIdx, targetLecture) => {
  pQuery(
    "UPDATE tb_lecture SET `categoryIdx` = ?, `lectureTitle` = ?, `lectureDesc` = ?, `lecturePrice` = ?, `modifyDate` = NOW() WHERE `lectureIdx` = ?",
    targetLecture.categoryIdx,
    targetLecture.lectureTitle,
    targetLecture.lectureDesc,
    targetLecture.lecturePrice,
    lectureIdx
  );
};

module.exports = Lecture;
