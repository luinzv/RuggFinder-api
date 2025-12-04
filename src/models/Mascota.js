import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    id_dueño: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    numero_contacto: {
      type: String,
      required: true,
    },

    codigo_escaneo: {
      type: String,
      unique: true,
      required: true,
    },

    genero: {
      type: String,
      enum: ["macho", "hembra", "otro"],
    },

    color: {
      type: String,
    },

    edad: {
      type: Number,
    },

    vacunas: {
      type: [String],
      default: [],
    },

    enfermedades: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Mascota", mascotaSchema);
