import Mascota from "../models/Mascota.js";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 8);

export const crearMascota = async (req, res) => {
  try {
    const { nombre, vacunas = [], genero, color, numeroContacto, edad, enfermedades = [] } = req.body;

    if (!nombre) return res.status(400).json({ msg: "El nombre de la mascota es obligatorio" });

    const numero_contacto = numeroContacto || req.user?.phone || null; 
    if (!numero_contacto) {
      return res.status(400).json({ msg: "El número de contacto es obligatorio (numeroContacto)" });
    }

    const generoNorm = genero ? String(genero).toLowerCase() : undefined;
    const generoPermitido = ["macho", "hembra", "otro"];
    if (generoNorm && !generoPermitido.includes(generoNorm)) {
      return res.status(400).json({ msg: `Genero inválido. Valores permitidos: ${generoPermitido.join(", ")}` });
    }

    const codigo_escaneo = `RF-${nanoid()}`;

    const nuevaMascota = new Mascota({
      nombre,
      vacunas,
      genero: generoNorm,
      color,
      numero_contacto,
      edad,
      enfermedades,
      codigo_escaneo,
      id_dueño: req.user 
    });

    const mascotaGuardada = await nuevaMascota.save();
    return res.status(201).json(mascotaGuardada);

  } catch (error) {
    console.error("Error crearMascota:", error);

    if (error.name === "ValidationError") {
      const errores = Object.keys(error.errors).reduce((acc, key) => {
        acc[key] = error.errors[key].message;
        return acc;
      }, {});
      return res.status(400).json({ msg: "Error de validación", errors: errores });
    }

    return res.status(500).json({ msg: "Error al crear la mascota" });
  }
};
