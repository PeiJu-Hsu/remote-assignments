const express = require('express');
const app = express();
const port = 3000;
//Assignment1: Creat a serve
app.get('/',(req, res) => {
    res.writeHead(200, {
        "constent-type":"text/html",
    });
    res.write('<h1>Hello, My 1st Serve!<h1>');
    res.end();
});
//Assgnment2: HTTP GET method   
app.get('/getData',(req, res) => {
    let num = req.query.number;
    res.writeHead(200, {
        "constent-type":"text/html",
    });
    if (!num) {
        res.write(`Lake of Parameter`)
    } else if (Number(num) > 0) {
        let result = sum(num);
        res.write(`1+2+...+${num} = ${result}`);
    } else {
        res.write(`Wrong Parameter`);
    }
    res.end()
    });
app.listen(port, (error) => {
    if (error) {
        console.log('Something wrong', error);
    } else {
        console.log('connect server on port'+ port)
    }
    });
function sum(num) {
    let total = 0;
    for ( i=1; i <= num; i++) {
        total += i;
    }
    return total;
}