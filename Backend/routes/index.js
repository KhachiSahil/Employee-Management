const express = require("express");
const {emproute} = require('./employee');
const { admnRoute } = require("./admin");
const { msgRoute } = require("./server");
const route = express.Router();


route.use('/employee',emproute);
route.use('/admin',admnRoute)
route.use('/message',msgRoute)

module.exports = {
    route
}