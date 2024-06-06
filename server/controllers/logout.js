const logout = async (req, res) => {
  try {
    const cookieOptions = {
      http: true,
      secure: true,
    };

    return res
      .cookie("token", "", cookieOptions)
      .json({ message: "Logged out successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || error, error: true });
  }
};

module.exports = logout;
