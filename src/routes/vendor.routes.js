import express from "express";
import { createVendor, getVendor } from "../controllers/vendor.controller.js";
const router = express.Router();

// Get all users
router.get("/vendor", getVendor);

// Get single user by ID
router.get("/vendor/:id", (req, res) => {
  // ...
});

// Add new user
router.post("/vendor", createVendor);

// Update user
router.put("/vendor/:id", (req, res) => {
  // ...
});

// Delete user
router.delete("/vendor/:id", (req, res) => {
  // ...
});

export default router;
