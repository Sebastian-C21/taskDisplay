// Archivo que inserta datos de prueba
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("📡 Conectado a MongoDB"))
  .catch(err => console.error("❌ Error de conexión", err));

// Definir el esquema y modelo
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema, 'items');

// Datos de prueba
const sampleTasks = [
  { title: "Comprar comida", description: "Comprar frutas y verduras", completed: false },
  { title: "Ir al gimnasio", description: "Ejercicio de 1 hora", completed: false },
  { title: "Leer un libro", description: "Leer 30 páginas de un libro", completed: false }
];

// Insertar datos en MongoDB
Task.insertMany(sampleTasks)
  .then(() => {
    console.log("✅ Datos insertados correctamente");
    mongoose.connection.close();
  })
  .catch(err => console.error("❌ Error al insertar datos", err));
