import { Router } from "express";

import { login, signup } from "../controllers/userController";

const router = Router();

router.get("/", (req, res) => {
  return res.send("The admin user profile");
});

router.post("/auth/login", login);
router.post("/auth/signup", signup);

export default router;
