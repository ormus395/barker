import { Router } from "express";
import { body } from "express-validator";

import { isAuth } from "../middleware/auth";
// import {
//   createPost,
//   deletePost,
//   updatePost,
// } from "../controllers/adminController";

const router = Router();

router.get("/admin/dashboard");
router.get("/admin/posts");

export default router;
