const {Router} = require('express');
const router = Router();
const cuestionario = require('../controllers/cuestionario.controllers');

router.get('/verCuestionarios', cuestionario.getCuestionarios);
router.post('/addCuestionario', cuestionario.addCuestionario);

module.exports = router;




