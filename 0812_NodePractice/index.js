import express from "express";

let app = express();
let port = 3000;

// get request

app.get("/", function (req, res){
    res.send("Hi");
})

// listen
app.listen(port, function(){
    console.log(`http://localhost:${port}`);
})
