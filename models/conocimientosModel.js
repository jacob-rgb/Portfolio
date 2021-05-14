const {Schema, model} = require('mongoose');

const ConocimientoSchema = Schema({
    
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
    },
    porcentaje: {
        type: String,
        required: true
    }
});

module.exports = model('Conocimiento', ConocimientoSchema);