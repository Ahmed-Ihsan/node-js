const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//test 1
/*const server = http.createServer((req, res) => {
  console.log(req.url , req.method);
  res.setHeader('Content-Type','text/html');
  res.write('<h1> Ahmed ihsan </h1>');
  res.write('<p> Ahmed ihsan </p>');
  res.write('<h2> Ahmed ihsan </h2>');
  res.end();
});*/

//test2

 // lodash
 const num = _.random(0, 20);
 console.log(num);

 const greet = _.once(() => {
   console.log('hello');
 });
 
 greet();
 greet();

const server = http.createServer((req, res) => {
  console.log(req.url , req.method);
  let path = './view/';
  switch(req.url){
    case '/':
      path += 'home.html';
      res.statusCode = 200;
      break;
    case'/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case'/about2':
      res.statusCode = 301;
      res.setHeader('Location','/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  res.setHeader('Content-Type','text/html');
  fs.readFile( path , (err ,data) => {
   if (err){
     console.log(err);
     res.end();
   }
   res.end(data);
 });
});

// localhost is the default value for 2nd argument
var port=5000;
server.listen(port, 'localhost', () => {
  console.log('listening for requests on port 3000');
});