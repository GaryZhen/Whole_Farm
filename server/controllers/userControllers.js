const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const db = require("../util/database");
const { json } = require("express");

//search product 方法
const searchProduct = (req, res, next) => {
  productName = req.body.productName;
  const sql3 =
    " select * from (select * from product  natural left join supplier) as newTable1 natural join origin where productName = ?;";

  console.log(
    `I had entering the searchProduct! The productName is ${productName}`
  );
  db.query(sql3, productName, (err, result) => {
    if (err) {
      res.send("Search got problem!");
    } else {
      res.send(result);
    }
  });
};

const checkProduct = (req, res, next) => {
  productName = req.body.productName;
  db.query("select * from product", productName, (err, result) => {
    if (err) {
      res.send("It got something wrong");
    } else {
      res.send(result);
    }
  });
};

const checkAll = (req, res, next) => {
  console.log("Im in check all");
  const sql2 =
    " select * from (select * from product  natural left join supplier) as newTable1 natural join origin;";
  db.query(sql2, (err, result) => {
    if (err) {
      res.send("It got something wrong");
    } else {
      res.send(result);
    }
  });
};

const insertReview = (req, res) => {
  userID = req.body.userID;
  descript = req.body.review;
  productID = req.body.productID;
  db.query(
    "insert review(descript, userID, productID) values(?, ?, ?);",
    [descript, userID, productID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ success: "Yes" });
        console.log("review Add successfully!");
      }
    }
  );
};

//输出该方法。
exports.searchProduct = searchProduct;
exports.checkProduct = checkProduct;
exports.insertReview = insertReview;
exports.checkAll = checkAll;
