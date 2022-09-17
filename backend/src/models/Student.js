const { Schema, model, default: mongoose } = require('mongoose');

const studentSchema = new Schema({
    cedula: {
        type: Number,
        //required: true
    },
    codigo: {
        type: Number,
        //required: true
    },
    nombre: {
        type: String,
        //required: true
    },
    apellido: {
        type: String,
        //required: true
    },
    credential: [{
        type: Schema.Types.ObjectId,
        //type:mongoose.Types.ObjectId,
        ref: 'Credentials'
    }]
}, {
    timestamps: true //fecha de creacion y actualizacion
});

module.exports = model('Students', studentSchema)