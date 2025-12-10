import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // Obtener el token de la cabecera Authorization
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // Si no hay token, redirigir al login (No autorizado)
  if (!token) {
    return res.status(401).json({ msg: "No autorizado. Token no proporcionado." });
  }

  try {
    // Verificar el token y decodificarlo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Asignar la información del usuario a la solicitud
    req.user = decoded.id;
    next(); // Continuar con la ejecución de la ruta
  } catch (error) {
    // Verificar si el error es de expiración de token
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token expirado. Por favor, inicia sesión nuevamente." });
    }

    // Si el token es inválido o no puede ser verificado
    return res.status(401).json({ msg: "Token inválido. Por favor, inicia sesión nuevamente." });
  }
};
