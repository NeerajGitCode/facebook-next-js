const jwt = require("jsonwebtoken");

const generateTokens = (user) => {
  return jwt.sign(
    { userId: user?._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "90d" }
  );
};

module.exports = { generateTokens };
