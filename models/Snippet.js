const mongoose = require('mongoose');
const { Schema } = mongoose;

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    language: {
        type: [String],
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    dependencies: String,
    image: String,
})

const Snippet = mongoose.model('Snippet', snippetSchema);
module.exports = Snippet;
