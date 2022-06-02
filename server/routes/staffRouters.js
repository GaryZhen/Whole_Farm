const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const staffControllers = require("../controllers/staffControllers");

router.post("/product/insertProduct", staffControllers.insertProduct);

//check all the product info  (test √)
router.get("/product/checkProduct", staffControllers.checkProduct);

//add new product   (no test)
router.post("/product/insertProduct", staffControllers.insertProduct);

//Update product   (test √)
router.put("/product/updateProduct", staffControllers.updateProduct);

//delete router is problematic!
//router.delete(`/product/deleteProduct`, staffControllers.deleteProduct);

module.exports = router;

//const placeControllers = require("../controllers/place-controllers");

// // :pid 路径参数 -- 这是一个动态字段, 后面跟上controller的控制函数
// router.get("/:pid", placeControllers.getPlaceById);

// router.get("/user/:uid", placeControllers.getPlacesByUserId);

// //引入express-validator 作为第二个参数，来检查req变量的问题。2. 接着你需要在controller里面进行error的判断以及抛出
// router.post(
//   "/",
//   [
//     check("title").not().isEmpty(),
//     check("description").isLength({ min: 5 }),
//     check("address").not().isEmpty(),
//   ],
//   placeControllers.createPlace
// );

// router.patch(
//   "/:pid",
//   [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
//   placeControllers.updatePlace
// );

// router.delete("/:pid", placeControllers.deletePlace);

// accept dynamic params
