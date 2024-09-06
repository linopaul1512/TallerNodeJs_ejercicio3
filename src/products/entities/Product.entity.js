import { Sequelize } from "sequelize";
import { sequelize } from '../../db/db.config';

export const Producto = sequelize.define('producto', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: {type: Sequelize.STRING, allowNull: false},
    description: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    createdAt: { type: 'DATETIME', defaultValue: Sequelize.NOW },
    updatedAt: { type: 'DATETIME', defaultValue: Sequelize.NOW, onUpdate: Sequelize.NOW }
}, 
{
    timestamps: false
});
