const express = require("express");
//const { createUser } = require("../controllers/user.controller");
const userRouter = require("./user");

const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
