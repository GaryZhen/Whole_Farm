const { v4: uuid } = require("uuid"); //用来生成id的函数，可能用不上
const { validationResult } = require("express-validator"); //用来对body体内容进行验证的方法

const db = require("../util/database");

//search product 方法
const checkProduct = (req, res) => {
  const sql2 =
    " select * from (select * from product  natural left join supplier) as newTable1 natural join origin;";

  db.query(sql2, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("Check all the info from staffs!");
    }
  });
};

const insertProduct = (req, res) => {
  const productID = req.body.productID;
  const productName = req.body.productName;
  const prices = req.body.prices;
  const quantity = req.body.quantity;
  const descript = req.body.descript;
  const organic = req.body.organic;
  const nutrients = req.body.nutrients;
  const supplierID = req.body.supplierID;

  //console.log(productName + productID);  //查看id内容
  //const wage = req.body.wage;
  //相当于从body体里面读取对应的 name dom元素

  //因为里面的数据是未知的，所以使用？ 当作占位符
  db.query(
    "insert into product values(?,?,?,?,?,?,?,?)",
    [
      productID,
      productName,
      prices,
      quantity,
      descript,
      organic,
      nutrients,
      supplierID,
    ],
    (err, result) => {
      if (err) {
        res.json({ message: "Wrong" });
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

// update product info
const updateProduct = (req, res) => {
  const productID = req.body.productID; // get id and wage from req.body
  const quantity = req.body.quantity;
  db.query(
    "update product set quantity = ? where productID = ? ",
    [quantity, productID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      } else {
        res.send(result);
        console.log(`Updated information which productID is ${productID}`);
      }
    }
  );
};

// delete product info   this is problematic!
const deleteProduct = (req, res) => {
  const productID = req.params.productID;
  console.log(`This is delete product, the productid is ${productID}`);
  db.query(
    "delete from product where productID = ? ",
    productID,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(`Delete ${productID} successfully!`);
      }
    }
  );
};

//输出该方法。
exports.checkProduct = checkProduct;
exports.insertProduct = insertProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
