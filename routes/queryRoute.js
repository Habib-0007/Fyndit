const express = require("express");
const queryGPT = require("../controllers/queryGPT");

const askGPT = queryGPT.askGPT;

const router = express.Router();

router.post("/", askGPT);

module.exports = router;
