const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Correct way to get the header

  console.log("JWT Secret in middleware:", process.env.JWT_SECRET);

  const authHeader =
    req.headers["authorization"] || req.header("authorization");
  console.log("Authorization header:", authHeader);

  const token = authHeader && authHeader.split(" ")[1];
  console.log("Extracted token:", token);

  if (!token) {
    return res.status(401).send("Access denied. Invalid token format.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach decoded user (id, email, etc.)
    next();
  } catch (error) {
    return res.status(400).send("Invalid token.");
  }
};

module.exports = authMiddleware;
