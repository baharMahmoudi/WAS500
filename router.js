const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html",
  };

  var d = new Date(); 
  var NoTimeDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); 
  let time = d.getHours()+':'+d.getMinutes()
const routes = {
  GET: {
  },
  POST: {},
};

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
      console.log(`Request received for page ${req.url} on`,NoTimeDate, `at`, time)
    } else {
      res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
      res.end("<h1>File Not Found!</h1>");
      console.log(`Request received for page ${req.url} on`,NoTimeDate, `at`, time)
      console.log(`An error occurred. Request for page ${req.url} could not be found on the server`,NoTimeDate, `at`, time)
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};