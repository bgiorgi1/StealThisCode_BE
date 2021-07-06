// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");


// Models
const { Snippet } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/snippet');
    try {
        const allSnippets = await Snippet.find({});

        res.json({ snippet: allSnippets });
    } catch (error) {
        console.log('Error inside of /api/snippet');
        console.log(error);
        return res.status(400).json({ message: 'Snippets not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for book based on id
        const snippet = await Snippet.findById(id);
        res.json({ snippet });
    } catch (error) {
        console.log('Error inside of /api/snippet/:id');
        console.log(error);
        return res.status(400).json({ message: 'Snippet not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { title, body, language, dependencies, image} = req.body;
    const userID = req.user.id || ''

    try {
        const newSnippet = await Snippet.create({ title, body, language, dependencies, image, userID});
        console.log('new snippet created', newSnippet);
        res.json({ snippet: newSnippet });
    } catch (error) {
       console.log('Error inside of POST of /api/snippets');
       console.log(error);
       return res.status(400).json({ message: 'Snippet was not created. Please try again...' }); 
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

        const updatedSnippet = await Snippet.update({ _id: req.params.id }, req.body); // updating the book
        const snippet = await Snippet.findOne({ _id: req.params.id });

        console.log(updatedSnippet); // { n: 1, nModified: 0, ok: 1 }
        console.log(snippet); // a book object 

        // res.redirect(`/api/snippets/${snippet.id}`);
        res.json (snippet)

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Snippet could not be updated. Please try again...' });
    }
}

const deleteSnippet = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        const result = await Snippet.findByIdAndRemove(id);
        console.log(result);
        // res.redirect('/api/snippets');
        res.json(result)

    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Snippet was not deleted. Please try again...' });
    }
}

// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Snippets endpoint OK!'});
});

// GET -> /api/books/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/books/:id
router.get('/:id', passport.authenticate('jwt', { session: false }), show);
// POST -> /api/books
router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/books
router.put('/:id', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/books/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteSnippet);






module.exports = router;

// router post for image upload **********************************
// router.post("/", upload.single("image"), async (req, res) => {
//     try {
//       // Upload image to cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path);
//        // Create new user
//       let user = new User({
//         name: req.body.name,
//         cloudinary_id: result.public_id,
//       });
//       // Save user
//       await user.save();
//       res.json(user);
//     } catch (err) {
//       console.log(err);
//     }}); 
  
//     router.get("/", async (req, res) => {
//       try {
//         let user = await User.find();
//         res.json(user);
//       } catch (err) {
//         console.log(err);
//       }});
  
//       router.delete("/:id", async (req, res) => {
//         try {
//           // Find user by id
//           let user = await User.findById(req.params.id);
//           // Delete image from cloudinary
//           await cloudinary.uploader.destroy(user.cloudinary_id);
//           // Delete user from db
//           await user.remove();
//           res.json(user);
//         } catch (err) {
//           console.log(err);
//         }});
  
//         router.put("/:id", upload.single("image"), async (req, res) => {
//           try {
//             let user = await User.findById(req.params.id);
//             // Delete image from cloudinary
//             await cloudinary.uploader.destroy(user.cloudinary_id);
//             // Upload image to cloudinary
//             const result = await cloudinary.uploader.upload(req.file.path);
//             const data = {
//               name: req.body.name || user.name,
//               cloudinary_id: result.public_id || user.cloudinary_id,
//             };
//             user = await User.findByIdAndUpdate(req.params.id, data, {
//          new: true
//          });
//             res.json(user);
//           } catch (err) {
//             console.log(err);
//           }});