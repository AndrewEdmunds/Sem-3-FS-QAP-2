const http = require("http");

const server = http.createServer((request, response) => {
  // Extract the URL from the request
  const url = request.url;

  // Handle different routes
  switch (url) {
    case "/":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Homepage</h1>");
      console.log("Homepage requested");
      break;
    case "/about":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>About Page</h1><p>filler content in ServerTsk2</p>");
      console.log("About page requested");
      break;
    case "/contact":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Contact Page</h1><p>filler content in ServerTsk2</p>");
      console.log("Contact page requested");
      break;
    case "/products":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Product Page</h1><p>filler content in ServerTsk2</p>");
      console.log("Products page requested");
      break;
    case "/subscribe":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(
        "<h1>Subscribe Page</h1><p>filler content in ServerTsk2</p>"
      );
      console.log("Subscribe page requested");
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(
        "<h1>404 Not Found</h1><p>The page you requested was not found.</p>"
      );
      console.log("Invalid page requested");
      break;
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
