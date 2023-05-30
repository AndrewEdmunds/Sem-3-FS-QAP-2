const http = require("http");

const server = http.createServer((request, response) => {
  // Extract the URL from the request
  const url = request.url;

  // Handle different routes
  switch (url) {
    case "/":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Welcome to the homepage!</h1>");
      console.log("Homepage requested");
      break;
    case "/about":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>About Us</h1><p>This is the about page.</p>");
      console.log("About page requested");
      break;
    case "/contact":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(
        "<h1>Contact Us</h1><p>Contact us at example@example.com.</p>"
      );
      console.log("Contact page requested");
      break;
    case "/products":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(
        "<h1>Our Products</h1><p>Check out our amazing products!</p>"
      );
      console.log("Products page requested");
      break;
    case "/subscribe":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(
        "<h1>Subscribe to Our Newsletter</h1><p>Subscribe to receive updates.</p>"
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
