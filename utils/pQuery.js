const pool = require("./db.js");

function pQuery(sqlString, values) {
  return new Promise((resolve, reject) => {
    pool.query(sqlString, values, (err, res) => {
      if (err) {
        console.error("error: " + err);
        reject(err);
        return;
      }
      resolve(res);
    });
  });
}

module.exports = pQuery;
