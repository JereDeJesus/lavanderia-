const ContactoService = require('../services/contactoService');

const agregarContacto = async (req, res) => {
  const { nombre, correo, comentario } = req.body;

  const direccion_ip = req.ip === '::1' ? '127.0.0.1' : req.ip; // Ajuste para obtener la dirección IP correctamente

  const resultado = await ContactoService.addContacto(nombre, correo, comentario, direccion_ip);

  if (resultado) {
    res.status(201).send({ mensaje: 'Contacto creado exitosamente.' });
  } else {
    res.status(500).send({ mensaje: 'Error al guardar el contacto.' });
  }
};

module.exports = {
  agregarContacto,
};
