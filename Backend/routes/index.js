const express = require("express");
const {emproute} = require('./employee');
const route = express.Router();

route.use('/employee',emproute);


module.exports = [
    route
]