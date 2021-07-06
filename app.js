// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const mongoose = require("mongoose"); // new
const PORT = process.env.PORT || 8000;

// //controllers
// import users from './api/users';
// import snippets from './api/snippets';

//defining mongoose options
// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err)); 


// API
const users = require('./api/users');
const snippets = require('./api/snippets');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize Passport and use config file
app.use(passport.initialize());
require('./config/passport')(passport);


// Home route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Smile, you are being watched by the Backend Engineering Team' });
});

// Routes
app.use('/api/users', users);
app.use('/api/snippets', snippets);

app.get('/*', (req, res) => {
    res.status(404).json({ message: 'Data not found' });
});

app.post('/api/*', async (rq, rs) => {
    console.log('post at', rq.url, rq.body);
    rs.json(rq.body);
  });
  app.delete('/api/*', async (rq, rs) => {
    console.log('delete at', rq.url, rq.body);
    rs.json(rq.body);
  });
  app.put('/api/*', async (rq, rs) => {
    console.log('put at', rq.url, rq.body);
    rs.json(rq.body);
  });
  // 404 route
  app.get('/*', (_, rs) => {
    rs.status(404).json({ message: 'Data not found' });
  });

app.listen(PORT, () => {
    console.log(`Server is listening 🎧 on port: ${PORT}`);
});
