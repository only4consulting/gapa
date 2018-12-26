'use strict'

// Agregar las variables de .env a las variables de entorno
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const
  express = require('express'),
  path = require('path'),
  port = process.env.PORT || 8080,
  app = express(),
  bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./dist/'));

// Router para lo estatico
const router = express.Router();
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});
app.use(router);

app.listen(port);

console.log("Variable de entorno de prueba", process.env.UAI);
console.log('Servidor corriendo en puerto: ' + port);