"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _blog = _interopRequireDefault(require("../models/blog"));

var _blogController = require("../controllers/blogController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get("/", _blogController.getHomeFeed);
router.get("/:blogId", _blogController.getBlog);
router.post("/post", _blogController.postBlog);
router.put("/:blogId");
router["delete"]("/:blogId", _blogController.deleteBlog);
var _default = router;
exports["default"] = _default;