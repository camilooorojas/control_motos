const { Schema, model, default: mongoose } = require('mongoose');
const parkingSchema = new Schema({
    cedula: {
        type: Number,                
    },
    codigo: {
        type: Number     
    },
    nombre: {
        type: String,                
    },
    apellido: {
        type: String     
    },
    placa: {
        type: String,                
    },
    id_tarjeta: {
        type: String     
    },
    inside: {
        type: Number     
    }
}, {
    timestamps: true //fecha de creacion y actualizacion
});

module.exports = model('Parkings', parkingSchema)