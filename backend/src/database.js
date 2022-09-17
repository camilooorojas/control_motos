const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';


mongoose.connect(URI);

const objetobd = mongoose.connection;

objetobd.on('connected', () => {console.log('conexion correcta a MongoDB')})
objetobd.on('error', () => {console.log('Error en la conexion a MongoDB')})

module.exports = mongoose;