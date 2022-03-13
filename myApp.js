const express= require('express');
const app = express();

const port= 5052;
app.listen(port);

app.get('/',(req,res)=>{
    console.log("Hello World");
    res.send("he")
})

