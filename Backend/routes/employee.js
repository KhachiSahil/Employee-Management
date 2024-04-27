const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { JWTTOKEN } = require('../config');
const { Employee } = require("../models/db");
const { authMiddleware } = require('../middlewares/authmiddleware');

const emproute = express.Router();

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

    const token = jwt.sign({ userId: user._id }, JWTTOKEN);
    res.status(200).header('Authorization', `Bearer ${token}`).json(user);
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

module.exports = { emproute };
