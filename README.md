# 🏫 Sistema de Matrícula – Laboratorio 2
Este proyecto integra varias tecnologías: **Web, Móvil, Base de Datos y Contenedores**.  
Es un mini sistema de matrícula que permite registrar alumnos y mostrar la cantidad de cursos en los que están matriculados.
---
## 📂 Estructura del Proyecto
- `web/` → Formulario en **HTML/JS** para registrar alumnos.  
- `movil/` → App en **React Native (Expo)** que lista alumnos y sus cursos.  
- `backend/` → Servidor **Node.js + Express** que conecta la Web/Móvil con la base de datos.  
- `bd/` → Script **SQL** con la creación de tablas y relaciones.  
- `contenedores/` (o `docker-compose.yml`) → Configuración para levantar **MySQL + phpMyAdmin** en Docker.  
- `README.md` → Explicación del proyecto.  
---
## 🌐 Desarrollo Web
Formulario HTML + JS que envía datos al backend.  
Permite registrar **nombre y correo** de un alumno.
---
## 📱 Desarrollo Móvil
App creada con **React Native (Expo)**:  
- Consume el endpoint del backend.  
- Muestra la lista de alumnos con su correo.  
- Además muestra **cuántos cursos tiene matriculados** (reto adicional).  
---
## 🗄️ Base de Datos
Tablas implementadas en MySQL:  
- `alumnos(id, nombre, correo)`  
- `cursos(id, nombre)`  
- `matriculas(id, alumno_id, curso_id)`
