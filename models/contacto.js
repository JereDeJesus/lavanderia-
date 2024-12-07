const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    comentario: { type: String, required: true },
    direccion_ip: { type: String, required: true },
    fecha_hora: { type: Date, default: Date.now }
});

const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = Contacto;
