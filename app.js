//? 1 se importa express
const express = require('express');

//? 2 se declara
const app = express();

//? 3 se instancia una respuesta al home
app.get('/', (req, res) =>{
  const { name } = req.query;
  res.send(`<h1>Hola ${name}!</h1>`);
});

//? 4 se pone el servidor en escucha
app.listen(3000, () => console.log('listening on port 3000!'));
