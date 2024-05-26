const express = require("express");
const cors = require("cors");
const{route} = require('./routes/index')
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));


app.use('/empmng',route);

app.listen(3000,(req,res)=>{
    console.log("server started succesfully");
})
