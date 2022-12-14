const {
    createBook,
    upload,
    getBook,
    getBookById,
    deleteBook,
    updateBook
} = require("../controllers/books");


const router = require('express').Router()
router.post('/', upload,createBook);
router.get('/',  getBook);
router.get('/:id', getBookById);
router.delete('/:id', deleteBook);
router.patch('/:id', updateBook);

module.exports = router;