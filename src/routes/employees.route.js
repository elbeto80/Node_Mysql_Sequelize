import { Router } from "express";

import {
  getEmployees,
  createEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.post("/employees", createEmployee);

router.get("/employees/:id", getEmployee);

router.delete("/employees/:id", deleteEmployee);

router.patch("/employees/:id", updateEmployee);

export default router;
