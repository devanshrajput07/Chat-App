const getUserDetailsfromToken = require("../helpers/getUserDetailsfromToken");

const userDetails = async (req, res) => {
  try {
    const token = req.cookies.token || "";

    const user = await getUserDetailsfromToken(token);

    return res.status(200).json({
      message: "User Details",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};

module.exports = userDetails;
