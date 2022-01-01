const { pQuery } = require("../utils");

const Lecture = function (lecture) {
  this.categoryIdx = lecture.categoryIdx;
  this.teacherIdx = lecture.teacherIdx;
  this.lectureTitle = lecture.lectureTitle;
  this.lectureDesc = lecture.lectureDesc;
  this.lecturePrice = lecture.lecturePrice;
  this.isShowYN = lecture.isShowYN;
};

Lecture.create = async (newLecture) => {
  console.log("newLecture: " + newLecture);
  try {
    const insertResult = await pQuery(
      "INSERT INTO tb_lecture SET ?",
      newLecture
    );
    return insertResult;
  } catch (err) {
    throw err;
  }
};

Lecture.selectIdx = async (lectureIdx) =>
  pQuery("SELECT * FROM tb_lecture WHERE `lectureIdx` = ?", lectureIdx);

Lecture.selectList = async (req) => {
  //검색어에 1. 강사명 2.강의이름 3.수강생ID
  //검색조건에 1.강의카테고리 2.전체카테고리
  //정렬: 최신순, 수강생 순
  let { category, teacher, title, student, order, page } = req.query;
  if (category !== undefined) {
    pQuery("SELECT * FROM ");
  }
  /*
  pQuery(
    "SELECT * FROM tb_lecture WHERE `isShowYN` = 'Y' ORDER BY `lectureIdx`"
  );
  */
};

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
