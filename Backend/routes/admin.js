const express = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { JWTTOKEN } = require('../config');
const { Admin, Employee } = require("../models/db");
const { authMiddleware } = require("../middlewares/authmiddleware");

const admnRoute = express.Router();

const schema = z.object({
    username: z.string(),
    password: z.string()
});

admnRoute.post('/login', async (req, res) => {
    try {
        const { success } = schema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({ "msg": "Invalid credentials" });
        }

        const user = await Admin.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if (!user) {
            return res.status(404).json({ "msg": "User not found" });
        }

        const token = jwt.sign({ userId: user._id }, JWTTOKEN);
        res.status(200).header('Authorization', `Bearer ${token}`).json(user);
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

admnRoute.put('/create', authMiddleware, async (req, res) => {
    try {
        const { success } = schema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({ "msg": "Invalid credentials" });
        }

        const employee = await Employee.findOne({
            username: req.body.username
        });

        if (employee) {
            return res.status(400).json({ "msg": "User already exists" });
        }

        await Employee.create({
            username: req.body.username,
            password: req.body.password
        });

        res.status(200).json({ "msg": "User created successfully" });
    } catch (error) {
        console.error("Create user error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

admnRoute.get('/bulk', authMiddleware, async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json({ employees });
    } catch (error) {
        console.error("Fetch employees error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

admnRoute.delete('/deleteuser', authMiddleware, async (req, res) => {
    const name = req.body.name;
    try {
        const deletedUser = await Employee.findOneAndDelete({ name });
        if (deletedUser) {
            res.status(200).json({ message: `User '${name}' deleted successfully` });
        } else {
            res.status(404).json({ error: `User '${name}' not found` });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = { admnRoute };
