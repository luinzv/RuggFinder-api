import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/bs.js";
import authRoutes from "../routes/authRoutes.js";
import mascotasRoutes from "../routes/mascotasRoutes.js";

// Configuración de entorno
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para procesar cuerpos JSON

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/mascotas", mascotasRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("RuggFinder API funcionando");
});

// Arrancar servidor
app.listen(process.env.PORT, () =>
  console.log("Servidor en puerto", process.env.PORT)
);
