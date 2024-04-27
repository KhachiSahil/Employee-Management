const express = require("express");
const {emproute} = require('./employee');
const { admnRoute } = require("./admin");
const route = express.Router();


route.use('/employee',emproute);
route.use('/admin',admnRoute)

module.exports = {
    route
}