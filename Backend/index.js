const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


app.use('/empmng',router);

app.listen(3000,(req,res)=>{
    console.log("server started succesfully");
})