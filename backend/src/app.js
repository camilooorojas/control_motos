const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set("port", process.env.PORT || 4000); //creacion variable, key - value


// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/students', require('./routes/students'));    
app.use('/api/credentials', require('./routes/credentials')); 
app.use('/api/credentials/tarjeta', require('./routes/credentials')); 
app.use('/api/parking', require('./routes/parking'));
app.use('/api/parking/outside', require('./routes/parking'));


module.exports = app;