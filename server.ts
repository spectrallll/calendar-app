import type * as E from 'express';
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;


const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', function (req: E.Request, res: E.Response) {
    return res.send('pong');
});


app.get('/*', function (req: E.Request, res: E.Response) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);