const express = require('express');
const router = express.Router();
const clienteController = require('./clienteController');

router.post('/clientes', clienteController.createCliente);
router.get('/clientes', clienteController.getAllClientes);
router.get('/clientes/:id', clienteController.getClienteById);
router.get('/clientes/cedula/:cedula', clienteController.getClienteByCedula);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deleteCliente);

module.exports = router;
