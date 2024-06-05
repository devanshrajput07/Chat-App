const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const checkPassword = async (req, res) => {
  try {
    const { email, userId } = req.body;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res
        .status(400)
        .json({ message: "User does not exist", error: true });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password", error: true });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    const token = JWT.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    return res
      .cookie("token", token, cookieOptions)
      .status(200)
      .json({ message: "Login Successfully", data: user, success: true });
      
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};

module.exports = checkPassword;
