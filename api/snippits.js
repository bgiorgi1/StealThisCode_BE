// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Models
const { Snippit } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/snippit');
    try {
        const allSnippits = await Snippit.find({});

        res.json({ snippit: allSnippits });
    } catch (error) {
        console.log('Error inside of /api/snippit');
        console.log(error);
        return res.status(400).json({ message: 'Snippits not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for book based on id
        const snippit = await Snippit.findById(id);
        res.json({ snippit });
    } catch (error) {
        console.log('Error inside of /api/snippit/:id');
        console.log(error);
        return res.status(400).json({ message: 'Snippit not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { title, author, price, pages, isbn, genre } = req.body;

    try {
        const newSnippit = await Snippit.create({ title, author, price, pages, isbn, genre });
        console.log('new snippit created', newSnippit);
        res.json({ snippit: newSnippit });
    } catch (error) {
       console.log('Error inside of POST of /api/snippits');
       console.log(error);
       return res.status(400).json({ message: 'Snippit was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);
    try {
        // const book = await Book.findOne({ title: req.body.title });
        // console.log(book);

        // book.author = req.body.author;
        // book.pages = req.body.pages;
        // book.isbn = req.body.isbn;
        // book.genre = req.body.genre;
        // book.price = req.body.price;

        // // save the new book info
        // const savedBook = await book.save();

        const updatedSnippit = await Snippit.update({ title: req.body.title }, req.body); // updating the book
        const snippit = await Snippit.findOne({ title: req.body.title });

        console.log(updatedSnippit); // { n: 1, nModified: 0, ok: 1 }
        console.log(snippit); // a book object 

        res.redirect(`/api/snippits/${snippit.id}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Snippit could not be updated. Please try again...' });
    }
}

const deleteSnippit = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        const result = await Snippit.findByIdAndRemove(id);
        console.log(result);
        res.redirect('/api/snippits');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Snippit was not deleted. Please try again...' });
    }
}

// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Snippits endpoint OK!'});
});

// GET -> /api/books/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/books/:id
router.get('/:id', passport.authenticate('jwt', { session: false }), show);
// POST -> /api/books
router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/books
router.put('/', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/books/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteSnippit);

module.exports = router;
