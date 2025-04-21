//Crear servidor y conectar al puerto
const books = require('./data/books.json')
const express = require('express') 
const app = express()
const port = 3000;

//Rutas
const routes = require("./routes/books.routes")
app.use("/books", routes)


app.listen(port, () => {
    console.log(`Ejecutando el servidor en el puerto: ${port}`)
  })


/*//Rutas
const booksRoutes = require("./routes/books.routes.js")
app.use('/api/books', booksRoutes);
app.use(express.json())*/