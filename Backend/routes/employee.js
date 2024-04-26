const express = require("express");
const {z} = require("zod");
const jwt  = require("jsonwebtoken");
const {JWTTOKEN} = require('../config');
const {Employee} = require("../models/db");
const emproute = express.Router();

const schema = z.object({
    email : z.string.email("This is not an email"),
    password : z.string()
})

emproute.get('/login',async (req,res)=>{
    const {success,error} = schema.safeParse(req.body);
    if(!success){
        res.status(401).json({msg:"Validation error"})
    }

    const userExist = await Employee.findOne({
        email : req.body.email,
        password : req.body.password
    })
    if(!userExist){
        res.status(411).json({msg:"User does not exist"})
    }
    const token = jwt.sign({userId:userExist._id},JWTTOKEN)
    res.status(200).set('Authorization',`Bearer ${token}`).send('login successfull')

})

emproute.post('/submit',(req,res)=>{
    
})


module.exports = {
    emproute
}