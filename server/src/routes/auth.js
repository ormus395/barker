import { Router } from "express";

import { login, signup, logout } from "../controllers/authController";

const router = Router();

router.get("/", (req, res) => {
  return res.send("The admin user profile");
});

router.post("/auth/login", login);
router.post("/auth/signup", signup);
router.post("/auth/logout", logout);

export default router;
