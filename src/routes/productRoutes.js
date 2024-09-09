const express = require('express');
const router = express.Router();
const {
  createProduct,
  findOneById,
  update,
  deleteProduct,
  findAll
} = require('../controllers/controller');

router.post('/', createProduct);

router.get('/:id', findOneById);

router.put('/:id', update);

router.delete('/:id', deleteProduct);

router.get('/', findAll);

module.exports = router;


/*
Nota: hay que probar con esta ruta: http://localhost:3000/products
*/