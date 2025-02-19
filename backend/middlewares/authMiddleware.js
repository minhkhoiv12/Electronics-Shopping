const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split("Bearer ")[1];
    if (!token) {
      return res.status(409).json({ error: "Please Login First" });
    } else {
      try {
        const deCodeToken = await jwt.verify(token, process.env.SECRET);
        req.role = deCodeToken.role;
        req.id = deCodeToken.id;
        next();
      } catch (error) {
        return res.status(409).json({ error: "Please Login" });
      }
    }
  } else {
    return res.status(409).json({ error: "Please Login" });
  }
};
