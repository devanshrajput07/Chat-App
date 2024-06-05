const express = require("express");
const registerUser = require("../controllers/registerUser");
const checkEmail = require("../controllers/checkEmail");
const checkPassword = require("../controllers/checkPassword");

const router = express.Router();

//Create User Route

// Register a new user
router.post("/register", registerUser);

// Check if the email exists
router.post("/checkEmail", checkEmail);

// Check if the password is correct
router.post("/checkPassword", checkPassword);

module.exports = router;
