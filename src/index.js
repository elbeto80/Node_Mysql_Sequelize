import express from "express";

import cors from "cors";

import employeesRoute from "../src/routes/employees.route.js";

const app = express();

app.use(express.json());
app.use(cors());

// ### Routes ### \\
app.use("/api", employeesRoute);

// ### Respuesta ruta no encontrada ### \\
app.use((req, res, next) => {
  res.status(404).json({ message: "ROUTE NOT FOUND" });
});

export default app;
