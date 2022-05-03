const req = require('express/lib/request');
const { pQuery } = require('../utils');

exports.selectList = async (searchParam) => {
  //검색어에 1. 강사명 2.강의이름 3.수강생ID
  //검색조건에 1.강의카테고리 2.전체카테고리
  //정렬: 최신순, 수강생 순
  //let { category, teacher, title, student, order, page, pageSize } = req.query;
  if (searchParam === 'undefined') {
    return await pQuery('SELECT * FROM tb_lecture');
  } else return await pQuery('SELECT * FROM tb_lecture');
};

exports.selectOne = async (lectureIdx) =>
  pQuery('SELECT * FROM tb_lecture WHERE `lectureIdx` = ?', lectureIdx);

exports.create = async (newLecture) => {
  try {
    const insertResult = await pQuery(
      'INSERT INTO tb_lecture SET ?',
      newLecture
    );
    return insertResult;
  } catch (err) {
    throw err;
  }
};

exports.update = (lectureIdx, targetLecture) => {
  pQuery(
    'UPDATE tb_lecture SET `categoryIdx` = ?, `lectureTitle` = ?, `lectureDesc` = ?, `lecturePrice` = ?, `modifyDate` = NOW() WHERE `lectureIdx` = ?',
    targetLecture.categoryIdx,
    targetLecture.lectureTitle,
    targetLecture.lectureDesc,
    targetLecture.lecturePrice,
    lectureIdx
  );
};

exports.updateShowYN = (isShowYN, lectureIdx) => {
  pQuery(
    'UPDATE tb_lecture SET `isShowYN` = ? WHERE `lectureIdx` = ?',
    isShowYN,
    lectureIdx
  );
};
