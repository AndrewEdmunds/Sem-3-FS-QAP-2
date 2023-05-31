const http = require("http");
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const server = http.createServer((request, response) => {
  const url = request.url;

  switch (url) {
    case "/":
      readFileAndRespond("index.html", response);
      console.log("Homepage requested");
      myEmitter.emit("routeAccessed", "/");
      break;
    case "/about":
      readFileAndRespond("about.html", response);
      console.log("About page requested");
      myEmitter.emit("routeAccessed", "/about");
      break;
    case "/contact":
      readFileAndRespond("contact.html", response);
      console.log("Contact page requested");
      myEmitter.emit("routeAccessed", "/contact");
      break;
    case "/products":
      readFileAndRespond("products.html", response);
      console.log("Products page requested");
      myEmitter.emit("routeAccessed", "/products");
      break;
    case "/subscribe":
      readFileAndRespond("subscribe.html", response);
      console.log("Subscribe page requested");
      myEmitter.emit("routeAccessed", "/subscribe");
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(
        "<h1>404 Not Found</h1><p>The page you requested does not exist.</p>"
      );
      console.log("Invalid page requested");
      myEmitter.emit("routeAccessed", "Invalid page");
      break;
  }
});

function readFileAndRespond(filename, response) {
  const viewsFolderPath = path.join(__dirname, "..", "views");
  const filePath = path.join(viewsFolderPath, filename);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end(
        "<h1>Internal Server Error</h1><p>An error has occurred on our side. Sorry!</p>"
      );
      console.error(err);
      myEmitter.emit("fileError", filePath);
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
      myEmitter.emit("fileRead", filePath);
    }
  });
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  myEmitter.emit("serverStarted", port);
});

// Event listeners for capturing and logging events
myEmitter.on("routeAccessed", (route) => {
  console.log(`Route accessed: ${route}`);
});

myEmitter.on("fileRead", (filePath) => {
  console.log(`File read: ${filePath}`);
});

myEmitter.on("fileError", (filePath) => {
  console.error(`Error reading file: ${filePath}`);
});

myEmitter.on("serverStarted", (port) => {
  console.log(`Server started on port ${port}`);
});
