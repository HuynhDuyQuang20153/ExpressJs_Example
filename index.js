const express = require('express')
const app = express()
const port = 8080
var fs = require('fs');

app.get('/spring', (req, res) => {
    fs.readFile('spring.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

    // hoac
    // fs.readFile( __dirname + "/" + "spring.html", 'utf8', function (err, data) {
    //     console.log( data );
    //     res.end( data );   
    // });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})