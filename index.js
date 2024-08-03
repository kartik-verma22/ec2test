const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New Request Recived!!");
    res.end("NOW WE ARE ON EC2 : CONGRATS IS SUCCESSFULL ");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No. 9000"));