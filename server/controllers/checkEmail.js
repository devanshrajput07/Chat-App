const UserModel = require("../models/UserModel");

const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "User does not exist", error: true });
    }

    return res
      .status(200)
      .json({ message: "Email verified", success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};

module.exports = checkEmail;
