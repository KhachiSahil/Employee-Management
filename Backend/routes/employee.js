const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const { JWTTOKEN } = require('../config');
const { Employee } = require("../models/db");
const { authMiddleware } = require('../middlewares/authmiddleware');

const emproute = express.Router();
emproute.use(cookieParser());
const schema = z.object({
    username: z.string(),
    password: z.string()
});

emproute.post('/login', async (req, res) => {
    const { success, error } = schema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ error: "Validation error" });
    }

    const user = await Employee.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    const userDataWithoutPassword = {
        _id: user._id,
        username: user.username,
        enquiries:user.enquiries,
        success:user.success
    };

    const token = jwt.sign({ userId: user._id }, JWTTOKEN);
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    res.status(200).json(userDataWithoutPassword);
});


emproute.post('/submit', authMiddleware, async (req, res) => {
    const { success, enquiries } = req.body;
    try {
        await Employee.updateOne({ _id: req.userId }, { success, enquiries });
        res.status(200).json({ message: "Entries updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

emproute.delete('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
});
  

module.exports = { emproute };
