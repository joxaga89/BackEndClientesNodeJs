const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  cedula: String,
  telefono: String,
  correo: String
});

module.exports = mongoose.model('Clientes', clienteSchema);
