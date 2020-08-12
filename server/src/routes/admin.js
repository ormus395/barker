import { Router } from "express";
import { body } from "express-validator";

import { isAuth } from "../middleware/auth";
import {
  postBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/adminController";

const router = Router();

router.post(
  "/blog/create",
  isAuth,
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
  isAuth,
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

router.delete("/blog/delete/:blogId", isAuth, deleteBlog);

export default router;
