import { productoRepository } from "./repository";


const findAll = async () => {
    return await productoRepository.findAll();
}

const findOneById = async (id) => {
    return await productoRepository.findOneById(id);
}

const create = async (productoData) => {
    return await productoRepository.create(productoData);
}

const update = async (id, productoData) => {
    const updatedProducto = await productoRepository.update(id, productoData);
    if (!updatedProducto) {
        throw new Error('Producto no encontrado');
    }
    return updatedProducto;
}

const deleteProducto = async (id) => {
    const deletedProducto = await productoRepository.deleteProducto(id);
    if (!deletedProducto) {
        throw new Error('Producto no encontrado');
    }
    return deletedProducto;
}

export const productoService = {
    findAll,
    findOneById,
    create,
    update,
    deleteProducto
}
