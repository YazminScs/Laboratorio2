const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // misma clave que en Docker
  database: "matricula"
});

// Registrar alumno
app.post("/alumnos", (req, res) => {
  const { nombre, correo } = req.body;
  db.query(
    "INSERT INTO alumnos (nombre, correo) VALUES (?, ?)",
    [nombre, correo],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Alumno registrado correctamente" });
    }
  );
});

// Listar alumnos
app.get("/alumnos", (req, res) => {
  db.query("SELECT * FROM alumnos", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

// Consulta: cuántos cursos tiene cada alumno
app.get("/alumnos/cursos", (req, res) => {
  const sql = `
    SELECT a.id, a.nombre, a.correo, COUNT(m.curso_id) AS cursos_matriculados
    FROM alumnos a
    LEFT JOIN matriculas m ON a.id = m.alumno_id
    GROUP BY a.id, a.nombre, a.correo;
  `;
  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});


app.listen(3000, () => console.log("Servidor en http://localhost:3000"));