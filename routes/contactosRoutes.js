const express = require('express');
const { agregarContacto } = require('../controllers/contactoController');

const router = express.Router();

router.post('/add', agregarContacto);

module.exports = router;
