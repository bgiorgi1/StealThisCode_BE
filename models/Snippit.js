const mongoose = require('mongoose');
const { Schema } = mongoose;

const snippitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    language: {
        type: String,
        enum: ['HTML', 'CSS', 'Javascript', 'Python',],
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dependencies: String,
})

const Snippit = mongoose.model('Snippit', snippitSchema);
module.exports = Snippit;
