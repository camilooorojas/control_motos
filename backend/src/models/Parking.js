const { Schema, model, default: mongoose } = require('mongoose');
const parkingSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,        
        ref: 'Students'
    },
    credential: {
        type: Schema.Types.ObjectId,        
        ref: 'Credentials'
    },
    inside: {
        type: Boolean        
    }
}, {
    timestamps: true //fecha de creacion y actualizacion
});

module.exports = model('Parkings', parkingSchema)