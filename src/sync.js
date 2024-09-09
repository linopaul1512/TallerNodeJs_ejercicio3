const sequelize = require('./config/db');
const Product = require('./models/product');

async function sync() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
}

sync();
