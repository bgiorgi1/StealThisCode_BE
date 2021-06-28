// import all models
const { Snippet } = require('./models');

Snippet.create([
    {
        title: 'Code 1',
        author: 'Author 1',
        body: 199,
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        language: Python,
        dependencies: 'NPM',
        userID: 123
    },
    {
        title: 'Code 2',
        author: 'Author 2',
        body: 300,
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        language: Javascript,
        dependencies: 'none',
        userID: 456
    },
    {
        title: 'Code 3',
        author: 'Author 3',
        body: 199,
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        language: CSS,
        dependencies: 'None',
        userID: 789
    },
    {
        title: 'Code 4',
        author: 'Author 4',
        body: 333,
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        language: HTML,
        dependencies: 'Bootstrap',
        userID: 1011
    }
], (err, results) => {
    console.log(results);
});