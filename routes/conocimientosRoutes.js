const { Router } = require('express');
const { obtenerConocimientos, subirConocimiento } = require('../controllers/conocimientosController');


const router = Router();

router.get('/', obtenerConocimientos);
router.post('/', subirConocimiento);


module.exports = router;