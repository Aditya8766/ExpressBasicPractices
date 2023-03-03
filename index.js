var express = require('express');
var app = express();
app.get('/getusr',function(req,res){
    res.send('Praise Array');
});
app.listen(4000);