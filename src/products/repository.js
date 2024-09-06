import { Producto } from "./entities/Product.entity";

const findAll = async () => {
    return await Producto.findAll();
}

const findOneById = async (id) => {
    return await Producto.findOne({ where: { id } });
}

const create = async (producto) => {
    return await Producto.create(producto);
}

const update = async (id, productoData) => {
    const producto = await Producto.findByPk(id);
    if (producto) {
        return await producto.update(productoData);
    }
    return null;
}

const deleteProducto = async (id) => {
    const producto = await Producto.findByPk(id);
    if (producto) {
        await producto.destroy();
        return producto;
    }
    return null;
}

export const productoRepository = {
    findAll,
    findOneById,
    create,
    update,
    deleteProducto
}
