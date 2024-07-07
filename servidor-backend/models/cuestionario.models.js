const {Schema, model} = require('mongoose');

const custionarioSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    genero: {type: String, required: true},
    pais: {type: String, required: true},
    preguntas: {type: Array, required: true},
    respuestas: {type: Array, required: true},
    nota: { type: Number, default: 0 }
}, {
    timestamps: true
});

module.exports = model('Cuestionario', custionarioSchema);