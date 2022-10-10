module.exports = (req, res, next) => {
  const jwt = require("jsonwebtoken");
  const config = require("config");

  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ message: "Нет авторизации" });
    }

    const decoded = jwt.verify(token, config.get("secretKey"));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).json({ message: "Нет авторизации"});
  }
};
