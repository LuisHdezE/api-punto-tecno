import express from "express";
import userRoutes from "./user.routes.js";
const router = express.Router();

//router.get("/user", userRoutes);
router.use("/user", userRoutes);
// router.use("/customers", require("./customers"));

export default router;
