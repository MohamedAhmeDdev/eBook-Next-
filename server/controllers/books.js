const book = require("../models/books")
const multer = require('multer')
const path = require('path')


const createBook = async (req, res) => {

    let data = {
        bookImage: req.file.path,
        bookName: req.body.bookName,
        BookAuthor: req.body.BookAuthor,
        BookDescription: req.body.BookDescription,
        BookPrice: req.body.BookPrice,
        BookType: req.body.BookType,
    }

    try {
        await book.create(data)
        res.json({ "message": "Created" });
    } catch (error) {
        res.json({ message: error.message });
    }
}


const getBook = async (req, res) => {
    try {
        const books = await book.findAll();
        res.json(books);
    } catch (error) {
        res.json({ message: error.message });
    }
}


const getBookById = async (req, res) => {
    let id = req.params.id
    try {
        const books = await book.findOne({
            where: { id: id }
        });
        res.status(200).send(books)
    } catch (error) {
        res.json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        await inventory.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        await book.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|webp/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('bookImage')



module.exports = {
    createBook,
    upload,
    getBook,
    getBookById,
    deleteBook,
    updateBook
}