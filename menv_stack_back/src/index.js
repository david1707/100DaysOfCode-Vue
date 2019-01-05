const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb://localhost/mevn-db')
    .then(db => console.log('Database connected'))

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

// Routes
app.use('/tasks', require('./routes/tasks.js'));

// Static files
app.use(express.static(__dirname + '/public'))

// Server is listening
app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`))