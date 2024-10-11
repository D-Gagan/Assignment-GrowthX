import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Get token from header
    if (!token) return res.status(401).json({ message: "No token, authorization denied." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.admin = decoded; // Attach admin info to request
        next(); // Proceed to next middleware
    } catch (err) {
        res.status(401).json({ message: "Token is not valid." });
    }
};
