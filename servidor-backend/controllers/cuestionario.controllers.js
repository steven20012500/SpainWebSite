const Cuestionario = require('../models/cuestionario.models');

const cuestionarioController = {};

cuestionarioController.getCuestionarios = async (req, res) => {
    const cuestionarios = await Cuestionario.find();
    res.json(cuestionarios);
}

cuestionarioController.addCuestionario = async (req, res) => {
    try {
        const { nombre, email, genero, pais, preguntas, respuestas, nota} = req.body;
        const newCuestionario = new Cuestionario({ nombre, email, genero, pais, preguntas, respuestas, nota});
        await newCuestionario.save();
        res.status(200).json({ message: 'Cuestionario guardado', cuestionario: newCuestionario });
    } catch (error) {
        console.error('Error al guardar cuestionario:', error);
        res.status(500).json({ message: 'Error interno al guardar cuestionario' });
    }
}

module.exports = cuestionarioController;