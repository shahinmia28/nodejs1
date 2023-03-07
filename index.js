const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT;
const hostName = "127.0.0.1";

const pageRoute = (status, pageLink, req, res) => {
  fs.readFile(pageLink, "utf-8", (err, data) => {
    res.writeHead(status, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
};

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    pageRoute(200, "./pages/index.html", req, res);
  } else if (req.url === "/about") {
    pageRoute(200, "./pages/about.html", req, res);
  } else if (req.url === "/contact") {
    pageRoute(200, "./pages/contact.html", req, res);
  } else {
    pageRoute(400, "./pages/error.html", req, res);
  }
});

myServer.listen(PORT, hostName, () => {
  console.log(`Run file here  http://${hostName}:${PORT}`);
});
