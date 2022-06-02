const db = require("../util/database");

// url:   /visit/registerUser
// check: router:yes;   sql: empty test
const userRegister = (req, res, next) => {
  console.log("I entering the registerUser");
  userID = req.body.userID;
  userName = req.body.userName;
  userPassword = req.body.userPassword;
  userEmail = req.body.userEmail;
  userGender = req.body.userGender;
  //userAddress = req.body.userAddress;
  userState = req.body.userState;
  userCity = req.body.userCity;
  userStreet = req.body.userStreet;
  userApt = req.body.userApt;
  userZipcode = req.body.userZipcode;
  let sql = `CALL register(?,?,?,?,?,?,?,?,?,?)`;
  db.query(
    sql,
    [
      userID,
      userName,
      userPassword,
      userEmail,
      userGender,
      //userAddress,
      userState,
      userCity,
      userStreet,
      userApt,
      userZipcode,
    ],
    (err, result) => {
      if (err) {
        //返回错误
        console.log(err);
        res.send({ message: "Wrong" });
      } else {
        // if correct just send the result back into the front-end.
        res.send(result);
      }
    }
  );
};

// url:   /visit/userLogin
// check: router:yes;   sql: yes
const userLogin = (req, res) => {
  console.log("I entering the userLogin");
  userID = req.body.userID;
  userPassword = req.body.userPassword;

  let sql = `call userlogin(?, ?)`;
  db.query(sql, [userID, userPassword], (err, result) => {
    if (err) {
      console.log("wrong");
      res.send({ err: err }); // what if I just set err here?
    }
    // If result length longer than 0, then I gonna send back the result to front end.
    if (result[0].length !== 0) {
      res.send({ message: "yes" });
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
};

const staffLogin = (req, res) => {
  console.log("I entering the staffLogin");
  staffID = req.body.staffID;
  staffPassword = req.body.staffPassword;

  let sql = `call stafflogin(?,?)`;
  db.query(sql, [staffID, staffPassword], (err, result) => {
    if (err) {
      console.log("wrong");
      res.send({ err: err }); // what if I just set err here?
    }
    // If result length longer than 0, then I gonna send back the result to front end.
    if (result[0].length !== 0) {
      res.send({ message: "yes" });
    } else {
      res.send({ message: "Wrong staffName/password combination!" });
    }
  });
};

exports.userRegister = userRegister;
exports.userLogin = userLogin;
exports.staffLogin = staffLogin;
