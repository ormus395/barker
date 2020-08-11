import { Router } from "express";
import { body } from "express-validator";

import Blog from "../models/blog";
import {
  postBlog,
  getHomeFeed,
  getBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/blogController";

const router = Router();

router.get("/blog", getHomeFeed);

router.get("/blog/:slug", getBlog);

router.post(
  "/blog/create",
  [
    body("title")
      .notEmpty()
      .withMessage("The title field must not be empty.")
      .isLength({ min: 5, max: 64 })
      .withMessage("The character limit for the title is: 5-64.")
      .trim(),
    body("markdown")
      .notEmpty()
      .withMessage("The content field must not be empty.")
      .trim(),
  ],
  postBlog
);

router.put(
  "/blog/edit/:blogId",
  [
    body("title")
      .notEmpty()
      .withMessage("The title field must not be empty.")
      .isLength({ min: 5, max: 64 })
      .withMessage("The character limit for the title is: 5-64.")
      .trim(),
    body("markdown")
      .notEmpty()
      .withMessage("The content field must not be empty.")
      .trim(),
  ],
  updateBlog
);

router.delete("/blog/delete/:blogId", deleteBlog);

export default router;
