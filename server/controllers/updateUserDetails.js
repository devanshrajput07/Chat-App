const UserModel = require("../models/UserModel");
const getUserDetailsfromToken = require("../helpers/getUserDetailsfromToken");

const updateUserDetails = async (req, res) => {
  try {
    const token = req.cookies.token || "";

    const user = await getUserDetailsfromToken(token);

    const { name, profile_pic } = req.body;

    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      { name, profile_pic }
    );

    const userInformation = await UserModel.findById(user._id);

    return res.json({
      message: "User details updated successfully",
      data: userInformation,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};

module.exports = updateUserDetails;
