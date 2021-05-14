const { Router } = require('express');
const { obtenerProyectos } = require('../controllers/proyectosController');

const router = Router();

router.get('/', obtenerProyectos);


module.exports = router;