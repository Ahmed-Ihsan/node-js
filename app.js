const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url , req.method);

  res.setHeader('Content-Type','text/html');
  res.write('<h1> Ahmed ihsan </h1>');
  res.write('<p> Ahmed ihsan </p>');
  res.write('<h2> Ahmed ihsan </h2>');
  res.end();
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});