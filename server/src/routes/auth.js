import { Router } from "express";

import { login, signup, logout } from "../controllers/authController";

const router = Router();

router.get("/", (req, res) => {
  return res.send("The admin user profile");
});

// handles user login and sets session
router.post("/auth/login", login);
// handles user creation
router.post("/auth/signup", signup);
// logs user out, destroys session
router.post("/auth/logout", logout);

export default router;
