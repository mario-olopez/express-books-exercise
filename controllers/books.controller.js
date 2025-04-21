const books = require("../data/books.json")

/*controller.app = (req, res) => {
    res.send('La conexión ha sido establecida correctamente desde el controller')
}*/

//Obtener todos los libros
const getAllBooks = (req, res) => {
    res.json(books)
}

//Obtener el primer libro
const getFirstBook = (req, res) => {
    const firstBook = books[0];
    res.json(firstBook);
}

//Obtener el último libro
const getLastBook = (req, res) => {
    const lastBook = books[books.length - 1];
    res.json(lastBook);
}

//Obtener el libro del medio
const getMiddleBook = (req, res) => {
    //console.log(books.length)
    const middleBook = books[49];
    res.json(middleBook)
}

//Título libro Dante
const getDanteBook = (req, res) => {
    const danteBook = books.find(book => book.author.toLowerCase() === "dante alighieri")
    if (danteBook){
        res.json({ title: danteBook.title})
    } else {
        res.status(404).json({ message: "No se ha encontrado el título del libro de Dante Alighieri"})
    };
};

//Obtener país del libro de Charles Dickens
const getCountryDickens = (req, res) => {
    const dickensBook = books.find(book => book.author.toLowerCase() === "charles dickens");
    if(dickensBook){
        res.json({ country: dickensBook.country});
    } else {
        res.status(404).json({ message: "No se ha encontrado el país del libro de Charles Dickens"});
    }
}

//module.exports = controller

module.exports = {
    getAllBooks,
    getFirstBook,
    getLastBook,
    getMiddleBook,
    getDanteBook,
    getCountryDickens 
}