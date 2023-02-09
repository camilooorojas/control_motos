const { Schema, model, default: mongoose } = require('mongoose');

const studentSchema = new Schema({
    cedula: {
        type: Number,
    },
    codigo: {
        type: Number,
    },
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    credential: [{
        type: Schema.Types.ObjectId,
        ref: 'Credentials'
    }]
}, {
    timestamps: true //fecha de creacion y actualizacion
});

module.exports = model('Students', studentSchema)