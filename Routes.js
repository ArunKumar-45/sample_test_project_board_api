const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
let db = new sqlite3.Database("./AroopaSample.db", (err) => {
  if (err) {
    console.log("Error Occurred - " + err.message);
  } else {
  }
});
var createQuery = `CREATE TABLE if not exists Aroopa ( id INTEGER PRIMARY KEY AUTOINCREMENT, stage INTEGER NOT NULL DEFAULT 1, title VARCHAR(100) NOT NULL);`;
db.run(createQuery, (err) => {
  if (err) {
    return;
  }
});
router.get("/", (req, res) => {
  var selectQuery = "SELECT * FROM Aroopa;";
  db.all(selectQuery, (err, data) => {
    if (err) {
      return;
    }
    res.send(data);
  });
});
router.post("/", (req, res) => {
  let body = req.body;
  var insertQuery = `INSERT INTO Aroopa (stage,title) VALUES (null,"${body.title}");`;
  db.run(insertQuery, (err) => {
    if (err) {
      return;
    }
    res.send(body);
  });
});
router.put("/:id", (req, res) => {
  let body = req.body;
  if (!req.params && req.params.id > 3) {
    res.status(400);
  } else {
    var updateQuery = `UPDATE Aroopa SET stage=${body.stage} where id=${req.params.id};`;
    db.run(updateQuery, (err) => {
      if (err) {
        return;
      }
      res.status(200).send(body);
    });
  }
});

module.exports = router;
