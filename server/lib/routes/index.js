"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _session = _interopRequireDefault(require("./session"));

var _user = _interopRequireDefault(require("./user"));

var _blog = _interopRequireDefault(require("./blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  session: _session["default"],
  user: _user["default"],
  blog: _blog["default"]
};
exports["default"] = _default;