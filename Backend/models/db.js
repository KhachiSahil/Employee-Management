const mongoose = require("mongoose")
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