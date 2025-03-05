import jwt from "jsonwebtoken";

const JWT_SECRET = "Flix@Time#123#"; 
export let blacklistedTokens = new Set(); // Store invalidated tokens (Use Redis for production)

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  if (blacklistedTokens.has(token)) {
    return res.status(401).json({ msg: "Token is invalid. Please log in again" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid "+ err.message });
  }
};

export default authMiddleware;
