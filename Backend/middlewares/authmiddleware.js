const jwt = require('jsonwebtoken');
const { JWTTOKEN } = require('../config');


async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ "message": "Authorization cookie not found" });
        }
        const decoded = jwt.verify(token, JWTTOKEN);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ "message": "Invalid token" });
    }
}

module.exports = { authMiddleware };
