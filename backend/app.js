require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');

const db = require('./config/database');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// routes temporaires ------------------------------------
app.use((req, res, next) => {
    const stuff = [
        {
          _id: 'oeihfzeoi',
          title: 'Mon premier objet',
          description: 'Les infos de mon premier objet',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
          price: 4900,
          userId: 'qsomihvqios',
        },
      ];
      res.status(200).json(stuff);
  });
// -----------------------------------------------------

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));  /* pour servir le dossier static image */

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

module.exports = app;