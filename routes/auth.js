// routes/authRoutes.js
import express from "express";
const router = express.Router();

// Example routes
router.post("/login", (req, res) => {
  res.send("Login route working");
});

router.post("/register", (req, res) => {
  res.send("Register route working");
});

export default router;
