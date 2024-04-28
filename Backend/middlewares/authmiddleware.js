const jwt = require('jsonwebtoken');
const {JWTTOKEN} = require('../config');

async function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(403).json({ "message": "Authorization header not found" });
    }
    const token = header.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWTTOKEN);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ "message": "Invalid token" });
    }
}

module.exports = { authMiddleware };
