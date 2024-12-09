const express = require('express');
const router = express.Router();
const { 
    getBooks, 
    getBookById, 
    addBook, 
    updateBook, 
    deleteBook 
} = require('../controllers/bookController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', protect, addBook);
router.put('/books/:id', protect, updateBook);
router.delete('/books/:id', protect, deleteBook);

module.exports = router;
