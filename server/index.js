const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const db = require("./util/database");
const staffRouters = require("./routes/staffRouters");
const userRouters = require("./routes/userRouters");
const visitRouters = require("./routes/visitRouters");

const app = express();

app.use(cors());
app.use(express.json()); // parse the body into json so that we can easily read the value from req.body.username

// app.use("/userRouters", userRouters);
// app.use("/staffRouters", staffRouters);

//如果路径开头有staff，调用指向后面的routers
app.use("/staff", staffRouters); // => first argument is a filter like a head.
app.use("/user", userRouters);
app.use("/visit", visitRouters);

console.log("If router not exists then it will show!");
// delete product info
app.delete(`/staff/product/deleteProduct/:productID`, (req, res) => {
  const productID = req.params.productID;
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
});

app.use((req, res, next) => {
  console.log("first error");
  const error = new Error("Not find!");
  next(error);
});

app.use((error, req, res, next) => {
  console.log("final error");
  res.json({ message: error.message });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
