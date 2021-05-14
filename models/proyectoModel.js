const { Schema, model} = require('mongoose');

const proyectoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    enlaceGit: {
        type: String,
        required: true
    },
    enlaceDemo: {
        type: String,
        required: true
    }
})

module.exports = model('Proyecto', proyectoSchema)