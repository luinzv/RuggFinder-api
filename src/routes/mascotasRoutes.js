import express from "express";
import { crearMascota } from "../controllers/mascotasController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, crearMascota);

export default router;
