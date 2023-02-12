import pool from "../database/connection.js";

export const getEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("select * from employees");
    return res.json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error consultando epleados", message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;

  try {
    const [rows] = await pool.query(
      "insert into employees (name, salary) values (?,?)",
      [name, salary]
    );
    console.log(rows);

    return res.status(201).json({
      message: "creando empleado",
      employee: {
        id: rows.insertId,
        name,
        salary,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error consultando epleados", message: error.message });
  }
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query("select * from employees where id = ?", [
      id,
    ]);

    if (result.length <= 0)
      return res.status(202).json({ employee: "NOT_FOUND" });

    return res.json({ employee: result[0] });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error consultando epleados", message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query("delete from employees where id = ?", [
      id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(202).json({ employee: "ID_NOT_FOUND" });

    return res.status(200).json({ result });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error eliminado epleado", message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "update employees set name = IFNULL(?, name), salary = IFNULL(?, salary) where id = ?",
      [name, salary, id]
    );

    if (result.affectedRows <= 0)
      return res.status(202).json({ employee: "ID_NOT_FOUND" });

    const [rows] = await pool.query("select * from employees where id = ?", [
      id,
    ]);

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error actualizando epleado", message: error.message });
  }
};
