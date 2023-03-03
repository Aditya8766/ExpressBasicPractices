const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListner = function(req,res){
    res.setHeader('Content-Type','text/app');
    res.setHeader('Content-Disposition','attachment;filename=Iris.csv');
    res.writeHead(200);
    res.end("Iris.csv");
};
const server = http.createServer(requestListner);
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
});