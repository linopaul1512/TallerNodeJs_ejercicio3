import { productoController } from '../products/controller';

import express from 'express';

const productoRouter = express.Router();

productoRouter.get('/', productoController.findAll);
productoRouter.get('/:id', productoController.findOneById);
productoRouter.post('/', productoController.create);
productoRouter.put('/:id', productoController.update);
productoRouter.delete('/:id', productoController.delete); 

export default productoRouter;
