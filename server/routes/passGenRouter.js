// passGenRouter.js

const express = require("express");
const router = express.Router();
const passGenController = require("../controllers/passGenController.js");

console.log(passGenController.getPass);


router.get("/passGen", passGenController.getPassByLength); // Handles queries like /passGen?lengthInput=3

module.exports = router;
