var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Define el esquema y modelo para las tareas
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema, 'items'); // 'items' es el nombre exacto de la colección en MongoDB

// Ruta GET para obtener todas las tareas
router.get('/', async function(req, res, next) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
});

// Ruta GET para obtener una tarea por su ID
router.get('/:id', async function(req, res, next) {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
});

module.exports = router;
