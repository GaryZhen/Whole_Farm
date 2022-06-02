const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

//继续进行路由分配：如果localhost/user/ .......的内容为Product/search，则调用userControllers的searchProduct方法
router.post("/product/searchProduct", userControllers.searchProduct);

router.get("/product/checkProduct", userControllers.checkProduct);

router.get("/product/checkAll", userControllers.checkAll);

router.post("/product/insertReview", userControllers.insertReview);

module.exports = router;
