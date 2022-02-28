const { pQuery } = require("../utils");
/*
const Lecture = function (lecture) {
  this.categoryIdx = lecture.categoryIdx; // 강의 카테고리 인덱스 번호
  this.lectureTitle = lecture.lectureTitle; // 강의명
  this.teacherIdx = lecture.teacherIdx; // 강사 인덱스 번호
  this.lecturePrice = lecture.lecturePrice; // 수강료
  this.lectureDesc = lecture.lectureDesc; // 강의 소개
  this.isShowYN = lecture.isShowYN; // 강의 노출 여부(Y/N)
  this.registDate = lecture.registDate; // 강의 생성일시
  this.modifyDate = lecture.modifyDate; // 강의 수정일시
};
*/
const Lecture = function (lecture) {}; // what is the difference?

Lecture.selectList = async () => {
  //검색어에 1. 강사명 2.강의이름 3.수강생ID
  //검색조건에 1.강의카테고리 2.전체카테고리
  //정렬: 최신순, 수강생 순
  //let { category, teacher, title, student, order, page, pageSize } = req.query;
  return await pQuery("SELECT * FROM tb_lecture");
};

Lecture.selectOne = async (lectureIdx) =>
  pQuery("SELECT * FROM tb_lecture WHERE `lectureIdx` = ?", lectureIdx);

Lecture.create = async (newLecture) => {
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

Lecture.updateShowYN = (isShowYN, lectureIdx) => {
  pQuery(
    "UPDATE tb_lecture SET `isShowYN` = ? WHERE `lectureIdx` = ?",
    isShowYN,
    lectureIdx
  );
};

module.exports = Lecture;
