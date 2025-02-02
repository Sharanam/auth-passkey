import express from "express";
import { registerPasskey, authenticatePasskey } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerPasskey);
router.post("/authenticate", authenticatePasskey);

export default router; // ✅ Ensure default export
