const express = require("express");
const {
  createOrderController,
  userOrderControlller
} = require("../controllers/orderController");

//router object
const router = express.Router();

//routes
router.post("/create-order", createOrderController);

router.get("/user-order/:id", userOrderControlller);

module.exports = router;