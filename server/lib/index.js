"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])()); // routes

app.use("/user", _routes["default"].user);
app.use("/blog", _routes["default"].blog); // 404 response

app.get("/not-found", function (req, res, next) {
  res.status(404).json({
    message: "The resource does not exist"
  });
}); // error handling

app.get("*", function (req, res, next) {
  var error = new Error("".concat(req.ip, " tried to access ").concat(req.originalUrl));
  error.statusCode = 301;
  next(error);
});
app.use(function (error, req, res, next) {
  if (!error.statusCode) error.statusCode = 500;

  if (error.statusCode === 301) {
    return res.status(301).redirect("/not-found");
  }

  return res.status(error.statusCode).json({
    error: error.toString()
  });
}); // connect to db and start server

_mongoose["default"].connect(process.env.DATABASE, {
  useNewUrlParser: true
}).then(function (result) {
  app.listen(process.env.PORT, function () {
    console.log("server started on port: " + process.env.PORT);
  });
})["catch"](function (err) {
  return console.log(err);
});