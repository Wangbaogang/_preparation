"use strict";

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mimeType = require('./mimeType');
const PORT = process.argv[2] || 8080;
const PRE_PATH = process.env.BUILD_ENV === "dev" ? "dev" : "build"

//构建nodejs服务
// https://adrianmejia.com/building-a-node-js-static-file-server-files-over-http-using-es6/

http.createServer((request, response) => { 

    const parsedUrl = url.parse(request.url);
    // extract URL path
    // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
    // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
    // by limiting the path to current directory only
    const sanitizePath = PRE_PATH + path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
    let pathname = path.join(__dirname, '../',  sanitizePath);

    fs.access(pathname, (err) => {
        if(err) {
            console.log("err code: ", err.code);
            if(err.code === 'ENOENT') {
                response.statusCode = 404;
                response.end(`File ${path} not found`);
            }
            else {
                response.statusCode = 404;
                response.end(`File ${path} is read-only`);
            }
            return;
        }
        if(fs.statSync(pathname).isDirectory()) {
            pathname += 'index.html';
        }

        fs.readFile(pathname, (err, data) => {
            if(err) {
                response.statusCode = 500;
                response.end(`Error getting the file: ${err}.`);
            }
            else {
                 // based on the URL path, extract the file extention. e.g. .js, .doc, ...
                const ext = path.parse(pathname).ext;
                // if the file is found, set Content-type and send data
                response.setHeader('Content-Type', mimeType[ext] || 'text/plain' );
                response.end(data);
            }
        })

    })
    
}).listen(parseInt(PORT));

console.log(`node server is running at port ${PORT}`)

