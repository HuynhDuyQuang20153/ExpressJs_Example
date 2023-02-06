var express = require('express');
var app = express();
var fs = require("fs");

app.get('/list', function (req, res) {
    fs.readFile( __dirname + "/" + "employee.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );   
    });
})

// app.get('/Ke_toan', function (req, res) {
//     fs.readFile( __dirname + "/" + "employee.json", 'utf8', function (err, data) {
//        var employees = JSON.parse( data );
//        var employee = employees["Employee" + req.params.Ke_toan] 
//        console.log( employee );
//        res.end( JSON.stringify(employee));
//     });
//  })

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })