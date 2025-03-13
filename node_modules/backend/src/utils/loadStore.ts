import path from "path";
import fs from "fs";

// Verifica si estás en Docker o en desarrollo local
const isDocker = process.env.DOCKER_ENV === "true";

// Define la ruta del archivo según el entorno
const storePath = isDocker
  ? "/app/store/storeUserData.json" // Ruta en Docker
  : path.resolve(__dirname, "../../../store/storeUserData.json"); // Ruta en desarrollo

// Carga el archivo
const pathStore = JSON.parse(fs.readFileSync(storePath, "utf-8"));

export default pathStore;