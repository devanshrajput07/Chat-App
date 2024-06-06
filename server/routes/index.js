const express = require("express");
const registerUser = require("../controllers/registerUser");
const checkEmail = require("../controllers/checkEmail");
const checkPassword = require("../controllers/checkPassword");
const userDetails = require("../controllers/userDetails");
const logout = require("../controllers/logout");
const updateUserDetails = require("../controllers/updateUserDetails");

const router = express.Router();

//Create User Route

// Register a new user
router.post("/register", registerUser);

// Check if the email exists
router.post("/checkEmail", checkEmail);

// Check if the password is correct
router.post("/checkPassword", checkPassword);

// Get user details
router.get("/userDetails", userDetails);

// Logout user
router.get("/logout", logout);

// Update user details
router.post("/updateUserDetails", updateUserDetails);

module.exports = router;
