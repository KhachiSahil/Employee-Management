const mongoose = require("mongoose");
const { number, Schema } = require("zod");
mongoose.connect('mongodb+srv://employee_management:hdf7tXVZhnDxOzLp@sahildb.d8gizka.mongodb.net/');

const Employees = new mongoose.Schema({
    username : {
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
    username : {
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

const messages = new mongoose.Schema({
    sender : {
        type : String,
        required : true
    },
    recipient : {
        type : String,
        required : true
    },
    message : {
        type : String, 
        required : true
    },
    timestamp : {
        type : Date,
        default : Date.now
    }
})

const chatSchema = new mongoose.Schema({
    participants: [{ type: String, required: true }],
    messages: [messages]
  });
  
  
const Chat = mongoose.model('Chat', chatSchema);
const Employee = mongoose.model('Employees',Employees);
const Admin = mongoose.model('Admin',Admins);
const Messages = mongoose.model('messages',messages)

module.exports = {
    Employee,
    Admin,
    Messages,
    Chat
}