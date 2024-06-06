const JWT = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const getUserDetailsfromToken = async (token) => {
  if (!token) {
    return {
      message: "Session Expired",
      logout: true,
    };
  }

  const decode = JWT.verify(token, process.env.JWT_SECRET);

  const user = await UserModel.findById(decode.id).select("-password");

  return user;
};

module.exports = getUserDetailsfromToken;
