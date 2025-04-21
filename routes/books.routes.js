const express = require("express")
const router = express.Router()
const booksController = require("../controllers/books.controller")

//Ruta para obtener todos los libros
//http://localhost:3000/books/all
router.get("/books/all", booksController.getAllBooks)

//Ruta para obtener el primer libro
router.get("/books/first", booksController.getFirstBook)

//Ruta para obtener el último libro
router.get("/books/last", booksController.getLastBook)

//Ruta para obtener el libro del medio
router.get("/books/middle", booksController.getMiddleBook)

//Ruta para libro de Dane
router.get("/author/dante-alighieri", booksController.getDanteBook)

//Ruta país libro de Dickens
router.get("country/charles-dickens", booksController.getCountryDickens)

module.exports = router