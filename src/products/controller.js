import { productoService } from "./service";

const findAll = async (req, res) => {
    try {
        const productos = await productoService.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const findOneById = async (req, res) => {
    try {
        const producto = await productoService.findOneById(req.params.id);
        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const create = async (req, res) => {
    try {
        const newProducto = await productoService.create(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const updatedProducto = await productoService.update(req.params.id, req.body);
        res.status(200).json(updatedProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProducto = async (req, res) => {
    try {
        const deletedProducto = await productoService.deleteProducto(req.params.id);
        res.status(200).json(deletedProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const productoController = {
    findAll,
    findOneById,
    create,
    update,
    delete: deleteProducto
}
