import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Authed user");
});

export default router;
