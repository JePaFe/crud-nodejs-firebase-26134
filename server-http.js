const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);
  response.end("Hola mundo");
});

server.listen(3000, () => console.log("http://localhost:3000"));
