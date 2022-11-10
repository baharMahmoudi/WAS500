const port = 3000,
  http = require("http"),
  router = require("./router"),
  httpStatusCodes = require("http-status-codes"),
  fs = require("fs");

const htmlContentType = {
  "Content-Type": "text/html",
};

const imageContentType = {
  "Content-Type": "image/jpeg",
};

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

router.get("/Books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/Books.html", res);
});

router.get("/starless.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/starless.html", res);
});

router.get("/turtles.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/turtles.html", res);
});

router.get("/whisper.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/whisper.html", res);
});

router.get("/public/images/green.jpeg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/green.jpeg", res);
});

router.get("/public/images/starless.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/starless.jpg", res);
});

router.get("/public/images/turtles.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/turtles.jpg", res);
});

router.get("/public/images/whisper.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/whisper.jpg", res);
  console.log(req.url)
});

http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);
