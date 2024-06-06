const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");

// Register a New User

const registerUser = async (req, res) => {
  try {
    const { username, email, password, profile_pic } = req.body;

    // Check if the user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", error: true });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a New User
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      profile_pic,
    });

    // Save the User to the database
    await newUser.save();
    return res
      .status(201)
      .json({
        message: "User created successfully",
        data: newUser,
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};

module.exports = registerUser;