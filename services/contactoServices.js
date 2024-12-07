const Contacto = require('../models/contacto');

class ContactoService {
  static async addContacto(nombre, correo, comentario, direccion_ip) {
    try {
      const nuevoContacto = new Contacto({ nombre, correo, comentario, direccion_ip });
      await nuevoContacto.save();
      return true;
    } catch (error) {
      console.error('Error al agregar contacto:', error);
      return false;
    }
  }
}

module.exports = ContactoService;
