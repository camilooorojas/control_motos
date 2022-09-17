const { Schema, model } = require('mongoose');

const credentialSchema = new Schema({
    placa: {
        type: String,
        required: true
    },
    id_tarjeta: {
        type: String,
        required: true
    }
}, {
    timestamps: true //fecha de creacion y actualizacion
});

module.exports = model('Credentials', credentialSchema)