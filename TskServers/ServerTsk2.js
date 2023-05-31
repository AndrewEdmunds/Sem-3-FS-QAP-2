const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  const url = request.url;

  switch (url) {
    case "/":
      readFileAndRespond("index.html", response);
      console.log("Homepage requested");
      break;
    case "/about":
      readFileAndRespond("about.html", response);
      console.log("About page requested");
      break;
    case "/contact":
      readFileAndRespond("contact.html", response);
      console.log("Contact page requested");
      break;
    case "/products":
      readFileAndRespond("products.html", response);
      console.log("Products page requested");
      break;
    case "/subscribe":
      readFileAndRespond("subscribe.html", response);
      console.log("Subscribe page requested");
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(
        "<h1>404 Not Found</h1><p>The page you requested does not exist.</p>"
      );
      console.log("Invalid page requested");
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
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    }
  });
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
