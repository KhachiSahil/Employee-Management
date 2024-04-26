const mongoose = require("mongoose");
const { number } = require("zod");
mongoose.connect();

const Employees = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        trim : true,
        required : true,
    },
    enquiries : {
        type : Number,
        required : true,
        default : 0
    },
    success : {
        type : Number,
        required : true,
        default : 0
    }
})

const Admins  = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        trim : true,
        required : true,
    }
})

const Employee = mongoose.model('Employees',Employees);
const Admin = mongoose.model('Admin',Admins);

module.exports = {
    Employee,
    Admin
}