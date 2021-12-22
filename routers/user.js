const express = require("express");
const { create } = require("../controllers/user.controller");

const router = express.Router();

router.get("/new", create);

module.exports = router;
