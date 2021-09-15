const express = require('express');
const router = express.Router();

const controller = require('../controllers/results');

/* GET users listing. */
router.get('/', controller.index);

router.get('/:n1/:n2',controller.suma);

router.post('/', controller.multiplicar);

router.put('/', controller.dividir);

router.patch('/', controller.potencia);

router.delete('/:n1/:n2', controller.restar);
module.exports = router;
