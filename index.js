let path = require('path');
let fs = require('fs');
let express = require('express');
let https = require('https');

let certOptions = {
    key: fs.readFileSync(path.resolve('server.key')),
    cert: fs.readFileSync(path.resolve('server.crt'))
};

let app = express();

let server = https.createServer(certOptions, app).listen(443);