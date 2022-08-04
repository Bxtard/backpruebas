//? 1 se importa express
const express = require('express');

//? 2 se declara
const app = express();

//? 3 se instancia una respuesta al home
app.get('/', (req, res) =>{
  const { name } = req.query;
<<<<<<< HEAD
  if (name) {
    res.send(`<h1>Hola ${name}!</h1>`);
  }else{
    res.send(`<h1>Hola desconocido!</h1>`);
  }
=======
  res.send(`<h1>Hola ${name}!</h1>`);
>>>>>>> 4792b6b1f625368d8b2fb3286378f0d4c444c63d
});

//? 4 se pone el servidor en escucha
app.listen(3000, () => console.log('listening on port 3000!'));
