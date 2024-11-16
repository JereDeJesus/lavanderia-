// Importar módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');

// Crear una aplicación Express
const app = express();

// Configuración del motor de vistas
app.set('view engine', 'ejs');  // Usar EJS como motor de vistas
app.set('views', './');         // Las vistas están en la raíz del proyecto

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));  // Parsear datos de formularios
app.use(express.static(__dirname)); // Servir archivos estáticos desde la raíz

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Mi aplicación', message: '¡Bienvenido!' });
});

// Ruta de ejemplo
app.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de', message: 'Página acerca de' });
});

// Ruta para manejar errores 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Error 404', message: 'Página no encontrada' });
});

// Escuchar en un puerto
const PORT = process.env.PORT || 3000; // Usar el puerto 3000 por defecto o uno definido en las variables de entorno
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
