const UserModel = require("../models/UserModel");

const userDetails = async (req, res) => {
  try {
    const token = req.cookies.token || "";
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};
