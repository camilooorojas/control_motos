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
        type: Boolean,
        required: true
    }
}, {
    timestamps: true //fecha de creacion y actualizacion
});

module.exports = model('Parking', parkingSchema)