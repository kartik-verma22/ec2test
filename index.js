const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New Request Recived!!");
    console.log("hello from ec2")
    res.end("NOW WE ARE ON EC2 Done Successfully ");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No. 9000"));
