const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);
  
  // Ruta para renderizar la plantilla EJS - index
  app.get('/index', (req, res) => {
    res.render('index.ejs', { mensaje: 'Gracias por visualizar nuestra pagina' });
  });
  
  // Ruta para renderizar la plantilla EJS
  app.get('/contacto', (req, res) => {
    res.render('contacto.ejs', { mensaje: '¡Hola desde la plantilla EJS!' });
  });
  
  // Ruta para renderizar la plantilla EJS
  app.get('/confirmacion', (req, res) => {
    res.render('confirmacion.ejs', { mensaje: '¡Hola desde la plantilla EJS!' });
  });
  

// Iniciar el servidor en el puerto 3000
app.listen(3100, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 321100');
});
